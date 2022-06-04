
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function afterUpdate(fn) {
        get_current_component().$$.after_update.push(fn);
    }
    function onDestroy(fn) {
        get_current_component().$$.on_destroy.push(fn);
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail, { cancelable = false } = {}) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail, { cancelable });
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
                return !event.defaultPrevented;
            }
            return true;
        };
    }
    function setContext(key, context) {
        get_current_component().$$.context.set(key, context);
        return context;
    }
    function getContext(key) {
        return get_current_component().$$.context.get(key);
    }
    // TODO figure out if we still want to support
    // shorthand events, or if we want to implement
    // a real bubbling mechanism
    function bubble(component, event) {
        const callbacks = component.$$.callbacks[event.type];
        if (callbacks) {
            // @ts-ignore
            callbacks.slice().forEach(fn => fn.call(this, event));
        }
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function tick() {
        schedule_update();
        return resolved_promise;
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.48.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev('SvelteDOMSetProperty', { node, property, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /**
     * @typedef {Object} WrappedComponent Object returned by the `wrap` method
     * @property {SvelteComponent} component - Component to load (this is always asynchronous)
     * @property {RoutePrecondition[]} [conditions] - Route pre-conditions to validate
     * @property {Object} [props] - Optional dictionary of static props
     * @property {Object} [userData] - Optional user data dictionary
     * @property {bool} _sveltesparouter - Internal flag; always set to true
     */

    /**
     * @callback AsyncSvelteComponent
     * @returns {Promise<SvelteComponent>} Returns a Promise that resolves with a Svelte component
     */

    /**
     * @callback RoutePrecondition
     * @param {RouteDetail} detail - Route detail object
     * @returns {boolean|Promise<boolean>} If the callback returns a false-y value, it's interpreted as the precondition failed, so it aborts loading the component (and won't process other pre-condition callbacks)
     */

    /**
     * @typedef {Object} WrapOptions Options object for the call to `wrap`
     * @property {SvelteComponent} [component] - Svelte component to load (this is incompatible with `asyncComponent`)
     * @property {AsyncSvelteComponent} [asyncComponent] - Function that returns a Promise that fulfills with a Svelte component (e.g. `{asyncComponent: () => import('Foo.svelte')}`)
     * @property {SvelteComponent} [loadingComponent] - Svelte component to be displayed while the async route is loading (as a placeholder); when unset or false-y, no component is shown while component
     * @property {object} [loadingParams] - Optional dictionary passed to the `loadingComponent` component as params (for an exported prop called `params`)
     * @property {object} [userData] - Optional object that will be passed to events such as `routeLoading`, `routeLoaded`, `conditionsFailed`
     * @property {object} [props] - Optional key-value dictionary of static props that will be passed to the component. The props are expanded with {...props}, so the key in the dictionary becomes the name of the prop.
     * @property {RoutePrecondition[]|RoutePrecondition} [conditions] - Route pre-conditions to add, which will be executed in order
     */

    /**
     * Wraps a component to enable multiple capabilities:
     * 1. Using dynamically-imported component, with (e.g. `{asyncComponent: () => import('Foo.svelte')}`), which also allows bundlers to do code-splitting.
     * 2. Adding route pre-conditions (e.g. `{conditions: [...]}`)
     * 3. Adding static props that are passed to the component
     * 4. Adding custom userData, which is passed to route events (e.g. route loaded events) or to route pre-conditions (e.g. `{userData: {foo: 'bar}}`)
     * 
     * @param {WrapOptions} args - Arguments object
     * @returns {WrappedComponent} Wrapped component
     */
    function wrap$1(args) {
        if (!args) {
            throw Error('Parameter args is required')
        }

        // We need to have one and only one of component and asyncComponent
        // This does a "XNOR"
        if (!args.component == !args.asyncComponent) {
            throw Error('One and only one of component and asyncComponent is required')
        }

        // If the component is not async, wrap it into a function returning a Promise
        if (args.component) {
            args.asyncComponent = () => Promise.resolve(args.component);
        }

        // Parameter asyncComponent and each item of conditions must be functions
        if (typeof args.asyncComponent != 'function') {
            throw Error('Parameter asyncComponent must be a function')
        }
        if (args.conditions) {
            // Ensure it's an array
            if (!Array.isArray(args.conditions)) {
                args.conditions = [args.conditions];
            }
            for (let i = 0; i < args.conditions.length; i++) {
                if (!args.conditions[i] || typeof args.conditions[i] != 'function') {
                    throw Error('Invalid parameter conditions[' + i + ']')
                }
            }
        }

        // Check if we have a placeholder component
        if (args.loadingComponent) {
            args.asyncComponent.loading = args.loadingComponent;
            args.asyncComponent.loadingParams = args.loadingParams || undefined;
        }

        // Returns an object that contains all the functions to execute too
        // The _sveltesparouter flag is to confirm the object was created by this router
        const obj = {
            component: args.asyncComponent,
            userData: args.userData,
            conditions: (args.conditions && args.conditions.length) ? args.conditions : undefined,
            props: (args.props && Object.keys(args.props).length) ? args.props : {},
            _sveltesparouter: true
        };

        return obj
    }

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }
    function derived(stores, fn, initial_value) {
        const single = !Array.isArray(stores);
        const stores_array = single
            ? [stores]
            : stores;
        const auto = fn.length < 2;
        return readable(initial_value, (set) => {
            let inited = false;
            const values = [];
            let pending = 0;
            let cleanup = noop;
            const sync = () => {
                if (pending) {
                    return;
                }
                cleanup();
                const result = fn(single ? values[0] : values, set);
                if (auto) {
                    set(result);
                }
                else {
                    cleanup = is_function(result) ? result : noop;
                }
            };
            const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
                values[i] = value;
                pending &= ~(1 << i);
                if (inited) {
                    sync();
                }
            }, () => {
                pending |= (1 << i);
            }));
            inited = true;
            sync();
            return function stop() {
                run_all(unsubscribers);
                cleanup();
            };
        });
    }

    function parse(str, loose) {
    	if (str instanceof RegExp) return { keys:false, pattern:str };
    	var c, o, tmp, ext, keys=[], pattern='', arr = str.split('/');
    	arr[0] || arr.shift();

    	while (tmp = arr.shift()) {
    		c = tmp[0];
    		if (c === '*') {
    			keys.push('wild');
    			pattern += '/(.*)';
    		} else if (c === ':') {
    			o = tmp.indexOf('?', 1);
    			ext = tmp.indexOf('.', 1);
    			keys.push( tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length) );
    			pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
    			if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
    		} else {
    			pattern += '/' + tmp;
    		}
    	}

    	return {
    		keys: keys,
    		pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i')
    	};
    }

    /* node_modules/svelte-spa-router/Router.svelte generated by Svelte v3.48.0 */

    const { Error: Error_1, Object: Object_1, console: console_1$1 } = globals;

    // (251:0) {:else}
    function create_else_block(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;
    	const switch_instance_spread_levels = [/*props*/ ctx[2]];
    	var switch_value = /*component*/ ctx[0];

    	function switch_props(ctx) {
    		let switch_instance_props = {};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return {
    			props: switch_instance_props,
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    		switch_instance.$on("routeEvent", /*routeEvent_handler_1*/ ctx[7]);
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const switch_instance_changes = (dirty & /*props*/ 4)
    			? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*props*/ ctx[2])])
    			: {};

    			if (switch_value !== (switch_value = /*component*/ ctx[0])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					switch_instance.$on("routeEvent", /*routeEvent_handler_1*/ ctx[7]);
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(251:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (244:0) {#if componentParams}
    function create_if_block(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;
    	const switch_instance_spread_levels = [{ params: /*componentParams*/ ctx[1] }, /*props*/ ctx[2]];
    	var switch_value = /*component*/ ctx[0];

    	function switch_props(ctx) {
    		let switch_instance_props = {};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return {
    			props: switch_instance_props,
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    		switch_instance.$on("routeEvent", /*routeEvent_handler*/ ctx[6]);
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const switch_instance_changes = (dirty & /*componentParams, props*/ 6)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*componentParams*/ 2 && { params: /*componentParams*/ ctx[1] },
    					dirty & /*props*/ 4 && get_spread_object(/*props*/ ctx[2])
    				])
    			: {};

    			if (switch_value !== (switch_value = /*component*/ ctx[0])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					switch_instance.$on("routeEvent", /*routeEvent_handler*/ ctx[6]);
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(244:0) {#if componentParams}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*componentParams*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function wrap(component, userData, ...conditions) {
    	// Use the new wrap method and show a deprecation warning
    	// eslint-disable-next-line no-console
    	console.warn('Method `wrap` from `svelte-spa-router` is deprecated and will be removed in a future version. Please use `svelte-spa-router/wrap` instead. See http://bit.ly/svelte-spa-router-upgrading');

    	return wrap$1({ component, userData, conditions });
    }

    /**
     * @typedef {Object} Location
     * @property {string} location - Location (page/view), for example `/book`
     * @property {string} [querystring] - Querystring from the hash, as a string not parsed
     */
    /**
     * Returns the current location from the hash.
     *
     * @returns {Location} Location object
     * @private
     */
    function getLocation() {
    	const hashPosition = window.location.href.indexOf('#/');

    	let location = hashPosition > -1
    	? window.location.href.substr(hashPosition + 1)
    	: '/';

    	// Check if there's a querystring
    	const qsPosition = location.indexOf('?');

    	let querystring = '';

    	if (qsPosition > -1) {
    		querystring = location.substr(qsPosition + 1);
    		location = location.substr(0, qsPosition);
    	}

    	return { location, querystring };
    }

    const loc = readable(null, // eslint-disable-next-line prefer-arrow-callback
    function start(set) {
    	set(getLocation());

    	const update = () => {
    		set(getLocation());
    	};

    	window.addEventListener('hashchange', update, false);

    	return function stop() {
    		window.removeEventListener('hashchange', update, false);
    	};
    });

    const location = derived(loc, $loc => $loc.location);
    const querystring = derived(loc, $loc => $loc.querystring);
    const params = writable(undefined);

    async function push(location) {
    	if (!location || location.length < 1 || location.charAt(0) != '/' && location.indexOf('#/') !== 0) {
    		throw Error('Invalid parameter location');
    	}

    	// Execute this code when the current call stack is complete
    	await tick();

    	// Note: this will include scroll state in history even when restoreScrollState is false
    	history.replaceState(
    		{
    			...history.state,
    			__svelte_spa_router_scrollX: window.scrollX,
    			__svelte_spa_router_scrollY: window.scrollY
    		},
    		undefined,
    		undefined
    	);

    	window.location.hash = (location.charAt(0) == '#' ? '' : '#') + location;
    }

    async function pop() {
    	// Execute this code when the current call stack is complete
    	await tick();

    	window.history.back();
    }

    async function replace(location) {
    	if (!location || location.length < 1 || location.charAt(0) != '/' && location.indexOf('#/') !== 0) {
    		throw Error('Invalid parameter location');
    	}

    	// Execute this code when the current call stack is complete
    	await tick();

    	const dest = (location.charAt(0) == '#' ? '' : '#') + location;

    	try {
    		const newState = { ...history.state };
    		delete newState['__svelte_spa_router_scrollX'];
    		delete newState['__svelte_spa_router_scrollY'];
    		window.history.replaceState(newState, undefined, dest);
    	} catch(e) {
    		// eslint-disable-next-line no-console
    		console.warn('Caught exception while replacing the current page. If you\'re running this in the Svelte REPL, please note that the `replace` method might not work in this environment.');
    	}

    	// The method above doesn't trigger the hashchange event, so let's do that manually
    	window.dispatchEvent(new Event('hashchange'));
    }

    function link(node, opts) {
    	opts = linkOpts(opts);

    	// Only apply to <a> tags
    	if (!node || !node.tagName || node.tagName.toLowerCase() != 'a') {
    		throw Error('Action "link" can only be used with <a> tags');
    	}

    	updateLink(node, opts);

    	return {
    		update(updated) {
    			updated = linkOpts(updated);
    			updateLink(node, updated);
    		}
    	};
    }

    // Internal function used by the link function
    function updateLink(node, opts) {
    	let href = opts.href || node.getAttribute('href');

    	// Destination must start with '/' or '#/'
    	if (href && href.charAt(0) == '/') {
    		// Add # to the href attribute
    		href = '#' + href;
    	} else if (!href || href.length < 2 || href.slice(0, 2) != '#/') {
    		throw Error('Invalid value for "href" attribute: ' + href);
    	}

    	node.setAttribute('href', href);

    	node.addEventListener('click', event => {
    		// Prevent default anchor onclick behaviour
    		event.preventDefault();

    		if (!opts.disabled) {
    			scrollstateHistoryHandler(event.currentTarget.getAttribute('href'));
    		}
    	});
    }

    // Internal function that ensures the argument of the link action is always an object
    function linkOpts(val) {
    	if (val && typeof val == 'string') {
    		return { href: val };
    	} else {
    		return val || {};
    	}
    }

    /**
     * The handler attached to an anchor tag responsible for updating the
     * current history state with the current scroll state
     *
     * @param {string} href - Destination
     */
    function scrollstateHistoryHandler(href) {
    	// Setting the url (3rd arg) to href will break clicking for reasons, so don't try to do that
    	history.replaceState(
    		{
    			...history.state,
    			__svelte_spa_router_scrollX: window.scrollX,
    			__svelte_spa_router_scrollY: window.scrollY
    		},
    		undefined,
    		undefined
    	);

    	// This will force an update as desired, but this time our scroll state will be attached
    	window.location.hash = href;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Router', slots, []);
    	let { routes = {} } = $$props;
    	let { prefix = '' } = $$props;
    	let { restoreScrollState = false } = $$props;

    	/**
     * Container for a route: path, component
     */
    	class RouteItem {
    		/**
     * Initializes the object and creates a regular expression from the path, using regexparam.
     *
     * @param {string} path - Path to the route (must start with '/' or '*')
     * @param {SvelteComponent|WrappedComponent} component - Svelte component for the route, optionally wrapped
     */
    		constructor(path, component) {
    			if (!component || typeof component != 'function' && (typeof component != 'object' || component._sveltesparouter !== true)) {
    				throw Error('Invalid component object');
    			}

    			// Path must be a regular or expression, or a string starting with '/' or '*'
    			if (!path || typeof path == 'string' && (path.length < 1 || path.charAt(0) != '/' && path.charAt(0) != '*') || typeof path == 'object' && !(path instanceof RegExp)) {
    				throw Error('Invalid value for "path" argument - strings must start with / or *');
    			}

    			const { pattern, keys } = parse(path);
    			this.path = path;

    			// Check if the component is wrapped and we have conditions
    			if (typeof component == 'object' && component._sveltesparouter === true) {
    				this.component = component.component;
    				this.conditions = component.conditions || [];
    				this.userData = component.userData;
    				this.props = component.props || {};
    			} else {
    				// Convert the component to a function that returns a Promise, to normalize it
    				this.component = () => Promise.resolve(component);

    				this.conditions = [];
    				this.props = {};
    			}

    			this._pattern = pattern;
    			this._keys = keys;
    		}

    		/**
     * Checks if `path` matches the current route.
     * If there's a match, will return the list of parameters from the URL (if any).
     * In case of no match, the method will return `null`.
     *
     * @param {string} path - Path to test
     * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
     */
    		match(path) {
    			// If there's a prefix, check if it matches the start of the path.
    			// If not, bail early, else remove it before we run the matching.
    			if (prefix) {
    				if (typeof prefix == 'string') {
    					if (path.startsWith(prefix)) {
    						path = path.substr(prefix.length) || '/';
    					} else {
    						return null;
    					}
    				} else if (prefix instanceof RegExp) {
    					const match = path.match(prefix);

    					if (match && match[0]) {
    						path = path.substr(match[0].length) || '/';
    					} else {
    						return null;
    					}
    				}
    			}

    			// Check if the pattern matches
    			const matches = this._pattern.exec(path);

    			if (matches === null) {
    				return null;
    			}

    			// If the input was a regular expression, this._keys would be false, so return matches as is
    			if (this._keys === false) {
    				return matches;
    			}

    			const out = {};
    			let i = 0;

    			while (i < this._keys.length) {
    				// In the match parameters, URL-decode all values
    				try {
    					out[this._keys[i]] = decodeURIComponent(matches[i + 1] || '') || null;
    				} catch(e) {
    					out[this._keys[i]] = null;
    				}

    				i++;
    			}

    			return out;
    		}

    		/**
     * Dictionary with route details passed to the pre-conditions functions, as well as the `routeLoading`, `routeLoaded` and `conditionsFailed` events
     * @typedef {Object} RouteDetail
     * @property {string|RegExp} route - Route matched as defined in the route definition (could be a string or a reguar expression object)
     * @property {string} location - Location path
     * @property {string} querystring - Querystring from the hash
     * @property {object} [userData] - Custom data passed by the user
     * @property {SvelteComponent} [component] - Svelte component (only in `routeLoaded` events)
     * @property {string} [name] - Name of the Svelte component (only in `routeLoaded` events)
     */
    		/**
     * Executes all conditions (if any) to control whether the route can be shown. Conditions are executed in the order they are defined, and if a condition fails, the following ones aren't executed.
     * 
     * @param {RouteDetail} detail - Route detail
     * @returns {boolean} Returns true if all the conditions succeeded
     */
    		async checkConditions(detail) {
    			for (let i = 0; i < this.conditions.length; i++) {
    				if (!await this.conditions[i](detail)) {
    					return false;
    				}
    			}

    			return true;
    		}
    	}

    	// Set up all routes
    	const routesList = [];

    	if (routes instanceof Map) {
    		// If it's a map, iterate on it right away
    		routes.forEach((route, path) => {
    			routesList.push(new RouteItem(path, route));
    		});
    	} else {
    		// We have an object, so iterate on its own properties
    		Object.keys(routes).forEach(path => {
    			routesList.push(new RouteItem(path, routes[path]));
    		});
    	}

    	// Props for the component to render
    	let component = null;

    	let componentParams = null;
    	let props = {};

    	// Event dispatcher from Svelte
    	const dispatch = createEventDispatcher();

    	// Just like dispatch, but executes on the next iteration of the event loop
    	async function dispatchNextTick(name, detail) {
    		// Execute this code when the current call stack is complete
    		await tick();

    		dispatch(name, detail);
    	}

    	// If this is set, then that means we have popped into this var the state of our last scroll position
    	let previousScrollState = null;

    	let popStateChanged = null;

    	if (restoreScrollState) {
    		popStateChanged = event => {
    			// If this event was from our history.replaceState, event.state will contain
    			// our scroll history. Otherwise, event.state will be null (like on forward
    			// navigation)
    			if (event.state && event.state.__svelte_spa_router_scrollY) {
    				previousScrollState = event.state;
    			} else {
    				previousScrollState = null;
    			}
    		};

    		// This is removed in the destroy() invocation below
    		window.addEventListener('popstate', popStateChanged);

    		afterUpdate(() => {
    			// If this exists, then this is a back navigation: restore the scroll position
    			if (previousScrollState) {
    				window.scrollTo(previousScrollState.__svelte_spa_router_scrollX, previousScrollState.__svelte_spa_router_scrollY);
    			} else {
    				// Otherwise this is a forward navigation: scroll to top
    				window.scrollTo(0, 0);
    			}
    		});
    	}

    	// Always have the latest value of loc
    	let lastLoc = null;

    	// Current object of the component loaded
    	let componentObj = null;

    	// Handle hash change events
    	// Listen to changes in the $loc store and update the page
    	// Do not use the $: syntax because it gets triggered by too many things
    	const unsubscribeLoc = loc.subscribe(async newLoc => {
    		lastLoc = newLoc;

    		// Find a route matching the location
    		let i = 0;

    		while (i < routesList.length) {
    			const match = routesList[i].match(newLoc.location);

    			if (!match) {
    				i++;
    				continue;
    			}

    			const detail = {
    				route: routesList[i].path,
    				location: newLoc.location,
    				querystring: newLoc.querystring,
    				userData: routesList[i].userData,
    				params: match && typeof match == 'object' && Object.keys(match).length
    				? match
    				: null
    			};

    			// Check if the route can be loaded - if all conditions succeed
    			if (!await routesList[i].checkConditions(detail)) {
    				// Don't display anything
    				$$invalidate(0, component = null);

    				componentObj = null;

    				// Trigger an event to notify the user, then exit
    				dispatchNextTick('conditionsFailed', detail);

    				return;
    			}

    			// Trigger an event to alert that we're loading the route
    			// We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
    			dispatchNextTick('routeLoading', Object.assign({}, detail));

    			// If there's a component to show while we're loading the route, display it
    			const obj = routesList[i].component;

    			// Do not replace the component if we're loading the same one as before, to avoid the route being unmounted and re-mounted
    			if (componentObj != obj) {
    				if (obj.loading) {
    					$$invalidate(0, component = obj.loading);
    					componentObj = obj;
    					$$invalidate(1, componentParams = obj.loadingParams);
    					$$invalidate(2, props = {});

    					// Trigger the routeLoaded event for the loading component
    					// Create a copy of detail so we don't modify the object for the dynamic route (and the dynamic route doesn't modify our object too)
    					dispatchNextTick('routeLoaded', Object.assign({}, detail, {
    						component,
    						name: component.name,
    						params: componentParams
    					}));
    				} else {
    					$$invalidate(0, component = null);
    					componentObj = null;
    				}

    				// Invoke the Promise
    				const loaded = await obj();

    				// Now that we're here, after the promise resolved, check if we still want this component, as the user might have navigated to another page in the meanwhile
    				if (newLoc != lastLoc) {
    					// Don't update the component, just exit
    					return;
    				}

    				// If there is a "default" property, which is used by async routes, then pick that
    				$$invalidate(0, component = loaded && loaded.default || loaded);

    				componentObj = obj;
    			}

    			// Set componentParams only if we have a match, to avoid a warning similar to `<Component> was created with unknown prop 'params'`
    			// Of course, this assumes that developers always add a "params" prop when they are expecting parameters
    			if (match && typeof match == 'object' && Object.keys(match).length) {
    				$$invalidate(1, componentParams = match);
    			} else {
    				$$invalidate(1, componentParams = null);
    			}

    			// Set static props, if any
    			$$invalidate(2, props = routesList[i].props);

    			// Dispatch the routeLoaded event then exit
    			// We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
    			dispatchNextTick('routeLoaded', Object.assign({}, detail, {
    				component,
    				name: component.name,
    				params: componentParams
    			})).then(() => {
    				params.set(componentParams);
    			});

    			return;
    		}

    		// If we're still here, there was no match, so show the empty component
    		$$invalidate(0, component = null);

    		componentObj = null;
    		params.set(undefined);
    	});

    	onDestroy(() => {
    		unsubscribeLoc();
    		popStateChanged && window.removeEventListener('popstate', popStateChanged);
    	});

    	const writable_props = ['routes', 'prefix', 'restoreScrollState'];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$1.warn(`<Router> was created with unknown prop '${key}'`);
    	});

    	function routeEvent_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function routeEvent_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ('routes' in $$props) $$invalidate(3, routes = $$props.routes);
    		if ('prefix' in $$props) $$invalidate(4, prefix = $$props.prefix);
    		if ('restoreScrollState' in $$props) $$invalidate(5, restoreScrollState = $$props.restoreScrollState);
    	};

    	$$self.$capture_state = () => ({
    		readable,
    		writable,
    		derived,
    		tick,
    		_wrap: wrap$1,
    		wrap,
    		getLocation,
    		loc,
    		location,
    		querystring,
    		params,
    		push,
    		pop,
    		replace,
    		link,
    		updateLink,
    		linkOpts,
    		scrollstateHistoryHandler,
    		onDestroy,
    		createEventDispatcher,
    		afterUpdate,
    		parse,
    		routes,
    		prefix,
    		restoreScrollState,
    		RouteItem,
    		routesList,
    		component,
    		componentParams,
    		props,
    		dispatch,
    		dispatchNextTick,
    		previousScrollState,
    		popStateChanged,
    		lastLoc,
    		componentObj,
    		unsubscribeLoc
    	});

    	$$self.$inject_state = $$props => {
    		if ('routes' in $$props) $$invalidate(3, routes = $$props.routes);
    		if ('prefix' in $$props) $$invalidate(4, prefix = $$props.prefix);
    		if ('restoreScrollState' in $$props) $$invalidate(5, restoreScrollState = $$props.restoreScrollState);
    		if ('component' in $$props) $$invalidate(0, component = $$props.component);
    		if ('componentParams' in $$props) $$invalidate(1, componentParams = $$props.componentParams);
    		if ('props' in $$props) $$invalidate(2, props = $$props.props);
    		if ('previousScrollState' in $$props) previousScrollState = $$props.previousScrollState;
    		if ('popStateChanged' in $$props) popStateChanged = $$props.popStateChanged;
    		if ('lastLoc' in $$props) lastLoc = $$props.lastLoc;
    		if ('componentObj' in $$props) componentObj = $$props.componentObj;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*restoreScrollState*/ 32) {
    			// Update history.scrollRestoration depending on restoreScrollState
    			history.scrollRestoration = restoreScrollState ? 'manual' : 'auto';
    		}
    	};

    	return [
    		component,
    		componentParams,
    		props,
    		routes,
    		prefix,
    		restoreScrollState,
    		routeEvent_handler,
    		routeEvent_handler_1
    	];
    }

    class Router extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
    			routes: 3,
    			prefix: 4,
    			restoreScrollState: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Router",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get routes() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set routes(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get prefix() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set prefix(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get restoreScrollState() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set restoreScrollState(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    class InMemoryLoginParametersOutputAdapter {
        constructor() {
            this.parameters = undefined;
        }
        store(parameters) {
            this.parameters = parameters;
        }
        getLoginParameters() {
            if (!this.parameters)
                throw Error("Illegal state : parameters are undefined");
            return this.parameters;
        }
    }

    class AuthenticationService {
        constructor(storeLoginParametersPort) {
            this.storeLoginParametersPort = storeLoginParametersPort;
        }
        login(parameters) {
            this.storeLoginParametersPort.store(parameters);
        }
    }

    class LoginParameters {
        constructor(appId, apiKey) {
            this.appId = appId;
            this.apiKey = apiKey;
        }
    }

    const Logged = {};
    class ChoozrCreated {
        constructor(choozrId) {
            this.choozrId = choozrId;
        }
    }

    /* src/ui/Login.svelte generated by Svelte v3.48.0 */
    const file$1 = "src/ui/Login.svelte";

    function create_fragment$2(ctx) {
    	let main;
    	let input0;
    	let t0;
    	let input1;
    	let t1;
    	let button;
    	let t2;
    	let button_disabled_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			main = element("main");
    			input0 = element("input");
    			t0 = space();
    			input1 = element("input");
    			t1 = space();
    			button = element("button");
    			t2 = text("Valider");
    			add_location(input0, file$1, 14, 2, 437);
    			add_location(input1, file$1, 15, 2, 469);
    			button.disabled = button_disabled_value = !/*appId*/ ctx[0] || !/*apiKey*/ ctx[1];
    			add_location(button, file$1, 16, 2, 500);
    			attr_dev(main, "class", "svelte-177t831");
    			add_location(main, file$1, 13, 0, 428);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, input0);
    			set_input_value(input0, /*apiKey*/ ctx[1]);
    			append_dev(main, t0);
    			append_dev(main, input1);
    			set_input_value(input1, /*appId*/ ctx[0]);
    			append_dev(main, t1);
    			append_dev(main, button);
    			append_dev(button, t2);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
    					listen_dev(button, "click", /*valider*/ ctx[2], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*apiKey*/ 2 && input0.value !== /*apiKey*/ ctx[1]) {
    				set_input_value(input0, /*apiKey*/ ctx[1]);
    			}

    			if (dirty & /*appId*/ 1 && input1.value !== /*appId*/ ctx[0]) {
    				set_input_value(input1, /*appId*/ ctx[0]);
    			}

    			if (dirty & /*appId, apiKey*/ 3 && button_disabled_value !== (button_disabled_value = !/*appId*/ ctx[0] || !/*apiKey*/ ctx[1])) {
    				prop_dev(button, "disabled", button_disabled_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Login', slots, []);
    	let appId = "";
    	let apiKey = "";
    	const dispatch = createEventDispatcher();
    	const loginUseCase = getContext("loginUseCase");

    	function valider() {
    		loginUseCase.login(new LoginParameters(appId, apiKey));
    		dispatch("routeEvent", Logged);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Login> was created with unknown prop '${key}'`);
    	});

    	function input0_input_handler() {
    		apiKey = this.value;
    		$$invalidate(1, apiKey);
    	}

    	function input1_input_handler() {
    		appId = this.value;
    		$$invalidate(0, appId);
    	}

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		getContext,
    		LoginParameters,
    		Logged,
    		appId,
    		apiKey,
    		dispatch,
    		loginUseCase,
    		valider
    	});

    	$$self.$inject_state = $$props => {
    		if ('appId' in $$props) $$invalidate(0, appId = $$props.appId);
    		if ('apiKey' in $$props) $$invalidate(1, apiKey = $$props.apiKey);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [appId, apiKey, valider, input0_input_handler, input1_input_handler];
    }

    class Login extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Login",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    class ChoozrName {
        constructor(value) {
            this.value = value;
        }
    }

    /* src/ui/Home.svelte generated by Svelte v3.48.0 */

    const { console: console_1 } = globals;
    const file = "src/ui/Home.svelte";

    function create_fragment$1(ctx) {
    	let main;
    	let input;
    	let t0;
    	let button;
    	let t1;
    	let button_disabled_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			main = element("main");
    			input = element("input");
    			t0 = space();
    			button = element("button");
    			t1 = text("Créer");
    			add_location(input, file, 15, 2, 546);
    			button.disabled = button_disabled_value = !/*choozrName*/ ctx[0];
    			add_location(button, file, 16, 2, 582);
    			add_location(main, file, 14, 0, 537);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, input);
    			set_input_value(input, /*choozrName*/ ctx[0]);
    			append_dev(main, t0);
    			append_dev(main, button);
    			append_dev(button, t1);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[2]),
    					listen_dev(button, "click", /*createChoozr*/ ctx[1], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*choozrName*/ 1 && input.value !== /*choozrName*/ ctx[0]) {
    				set_input_value(input, /*choozrName*/ ctx[0]);
    			}

    			if (dirty & /*choozrName*/ 1 && button_disabled_value !== (button_disabled_value = !/*choozrName*/ ctx[0])) {
    				prop_dev(button, "disabled", button_disabled_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Home', slots, []);
    	const createChoozrUseCase = getContext("createChoozrUseCase");
    	const dispatch = createEventDispatcher();
    	let choozrName = "";

    	function createChoozr() {
    		createChoozrUseCase.createChoozrWith(new ChoozrName(choozrName)).then(choozr => dispatch("routeEvent", new ChoozrCreated(choozr.id))).catch(err => console.log(err));
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		choozrName = this.value;
    		$$invalidate(0, choozrName);
    	}

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		getContext,
    		ChoozrName,
    		ChoozrCreated,
    		createChoozrUseCase,
    		dispatch,
    		choozrName,
    		createChoozr
    	});

    	$$self.$inject_state = $$props => {
    		if ('choozrName' in $$props) $$invalidate(0, choozrName = $$props.choozrName);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [choozrName, createChoozr, input_input_handler];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    class ChoozrService {
        constructor(createChoozrPort, getLoginParametersPort) {
            this.createChoozrPort = createChoozrPort;
            this.getLoginParametersPort = getLoginParametersPort;
        }
        async createChoozrWith(choozrName) {
            const loginParameters = this.getLoginParametersPort.getLoginParameters();
            return await this.createChoozrPort.createChoozrWith(choozrName, loginParameters);
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    function commonjsRequire (target) {
    	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
    }

    var airtable_umd = createCommonjsModule(function (module, exports) {
    (function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    // istanbul ignore file
    var AbortController;
    if (typeof window === 'undefined') {
        AbortController = require('abort-controller');
    }
    else if ('signal' in new Request('')) {
        AbortController = window.AbortController;
    }
    else {
        /* eslint-disable @typescript-eslint/no-var-requires */
        var polyfill = require('abortcontroller-polyfill/dist/cjs-ponyfill');
        /* eslint-enable @typescript-eslint/no-var-requires */
        AbortController = polyfill.AbortController;
    }
    module.exports = AbortController;

    },{"abort-controller":20,"abortcontroller-polyfill/dist/cjs-ponyfill":19}],2:[function(require,module,exports){
    var AirtableError = /** @class */ (function () {
        function AirtableError(error, message, statusCode) {
            this.error = error;
            this.message = message;
            this.statusCode = statusCode;
        }
        AirtableError.prototype.toString = function () {
            return [
                this.message,
                '(',
                this.error,
                ')',
                this.statusCode ? "[Http code " + this.statusCode + "]" : '',
            ].join('');
        };
        return AirtableError;
    }());
    module.exports = AirtableError;

    },{}],3:[function(require,module,exports){
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var get_1 = __importDefault(require("lodash/get"));
    var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
    var keys_1 = __importDefault(require("lodash/keys"));
    var fetch_1 = __importDefault(require("./fetch"));
    var abort_controller_1 = __importDefault(require("./abort-controller"));
    var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
    var airtable_error_1 = __importDefault(require("./airtable_error"));
    var table_1 = __importDefault(require("./table"));
    var http_headers_1 = __importDefault(require("./http_headers"));
    var run_action_1 = __importDefault(require("./run_action"));
    var package_version_1 = __importDefault(require("./package_version"));
    var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
    var userAgent = "Airtable.js/" + package_version_1.default;
    var Base = /** @class */ (function () {
        function Base(airtable, baseId) {
            this._airtable = airtable;
            this._id = baseId;
        }
        Base.prototype.table = function (tableName) {
            return new table_1.default(this, null, tableName);
        };
        Base.prototype.makeRequest = function (options) {
            var _this = this;
            var _a;
            if (options === void 0) { options = {}; }
            var method = get_1.default(options, 'method', 'GET').toUpperCase();
            var url = this._airtable._endpointUrl + "/v" + this._airtable._apiVersionMajor + "/" + this._id + get_1.default(options, 'path', '/') + "?" + object_to_query_param_string_1.default(get_1.default(options, 'qs', {}));
            var controller = new abort_controller_1.default();
            var headers = this._getRequestHeaders(Object.assign({}, this._airtable._customHeaders, (_a = options.headers) !== null && _a !== void 0 ? _a : {}));
            var requestOptions = {
                method: method,
                headers: headers,
                signal: controller.signal,
            };
            if ('body' in options && _canRequestMethodIncludeBody(method)) {
                requestOptions.body = JSON.stringify(options.body);
            }
            var timeout = setTimeout(function () {
                controller.abort();
            }, this._airtable._requestTimeout);
            return new Promise(function (resolve, reject) {
                fetch_1.default(url, requestOptions)
                    .then(function (resp) {
                    clearTimeout(timeout);
                    if (resp.status === 429 && !_this._airtable._noRetryIfRateLimited) {
                        var numAttempts_1 = get_1.default(options, '_numAttempts', 0);
                        var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts_1);
                        setTimeout(function () {
                            var newOptions = __assign(__assign({}, options), { _numAttempts: numAttempts_1 + 1 });
                            _this.makeRequest(newOptions)
                                .then(resolve)
                                .catch(reject);
                        }, backoffDelayMs);
                    }
                    else {
                        resp.json()
                            .then(function (body) {
                            var err = _this._checkStatusForError(resp.status, body) ||
                                _getErrorForNonObjectBody(resp.status, body);
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve({
                                    statusCode: resp.status,
                                    headers: resp.headers,
                                    body: body,
                                });
                            }
                        })
                            .catch(function () {
                            var err = _getErrorForNonObjectBody(resp.status);
                            reject(err);
                        });
                    }
                })
                    .catch(function (err) {
                    clearTimeout(timeout);
                    err = new airtable_error_1.default('CONNECTION_ERROR', err.message, null);
                    reject(err);
                });
            });
        };
        /**
         * @deprecated This method is deprecated.
         */
        Base.prototype.runAction = function (method, path, queryParams, bodyData, callback) {
            run_action_1.default(this, method, path, queryParams, bodyData, callback, 0);
        };
        Base.prototype._getRequestHeaders = function (headers) {
            var result = new http_headers_1.default();
            result.set('Authorization', "Bearer " + this._airtable._apiKey);
            result.set('User-Agent', userAgent);
            result.set('Content-Type', 'application/json');
            for (var _i = 0, _a = keys_1.default(headers); _i < _a.length; _i++) {
                var headerKey = _a[_i];
                result.set(headerKey, headers[headerKey]);
            }
            return result.toJSON();
        };
        Base.prototype._checkStatusForError = function (statusCode, body) {
            var _a = (body !== null && body !== void 0 ? body : { error: {} }).error, error = _a === void 0 ? {} : _a;
            var type = error.type, message = error.message;
            if (statusCode === 401) {
                return new airtable_error_1.default('AUTHENTICATION_REQUIRED', 'You should provide valid api key to perform this operation', statusCode);
            }
            else if (statusCode === 403) {
                return new airtable_error_1.default('NOT_AUTHORIZED', 'You are not authorized to perform this operation', statusCode);
            }
            else if (statusCode === 404) {
                return new airtable_error_1.default('NOT_FOUND', message !== null && message !== void 0 ? message : 'Could not find what you are looking for', statusCode);
            }
            else if (statusCode === 413) {
                return new airtable_error_1.default('REQUEST_TOO_LARGE', 'Request body is too large', statusCode);
            }
            else if (statusCode === 422) {
                return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNPROCESSABLE_ENTITY', message !== null && message !== void 0 ? message : 'The operation cannot be processed', statusCode);
            }
            else if (statusCode === 429) {
                return new airtable_error_1.default('TOO_MANY_REQUESTS', 'You have made too many requests in a short period of time. Please retry your request later', statusCode);
            }
            else if (statusCode === 500) {
                return new airtable_error_1.default('SERVER_ERROR', 'Try again. If the problem persists, contact support.', statusCode);
            }
            else if (statusCode === 503) {
                return new airtable_error_1.default('SERVICE_UNAVAILABLE', 'The service is temporarily unavailable. Please retry shortly.', statusCode);
            }
            else if (statusCode >= 400) {
                return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNEXPECTED_ERROR', message !== null && message !== void 0 ? message : 'An unexpected error occurred', statusCode);
            }
            else {
                return null;
            }
        };
        Base.prototype.doCall = function (tableName) {
            return this.table(tableName);
        };
        Base.prototype.getId = function () {
            return this._id;
        };
        Base.createFunctor = function (airtable, baseId) {
            var base = new Base(airtable, baseId);
            var baseFn = function (tableName) {
                return base.doCall(tableName);
            };
            baseFn._base = base;
            baseFn.table = base.table.bind(base);
            baseFn.makeRequest = base.makeRequest.bind(base);
            baseFn.runAction = base.runAction.bind(base);
            baseFn.getId = base.getId.bind(base);
            return baseFn;
        };
        return Base;
    }());
    function _canRequestMethodIncludeBody(method) {
        return method !== 'GET' && method !== 'DELETE';
    }
    function _getErrorForNonObjectBody(statusCode, body) {
        if (isPlainObject_1.default(body)) {
            return null;
        }
        else {
            return new airtable_error_1.default('UNEXPECTED_ERROR', 'The response from Airtable was invalid JSON. Please try again soon.', statusCode);
        }
    }
    module.exports = Base;

    },{"./abort-controller":1,"./airtable_error":2,"./exponential_backoff_with_jitter":6,"./fetch":7,"./http_headers":9,"./object_to_query_param_string":11,"./package_version":12,"./run_action":16,"./table":17,"lodash/get":77,"lodash/isPlainObject":89,"lodash/keys":93}],4:[function(require,module,exports){
    /**
     * Given a function fn that takes a callback as its last argument, returns
     * a new version of the function that takes the callback optionally. If
     * the function is not called with a callback for the last argument, the
     * function will return a promise instead.
     */
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
    function callbackToPromise(fn, context, callbackArgIndex) {
        if (callbackArgIndex === void 0) { callbackArgIndex = void 0; }
        /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
        return function () {
            var callArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                callArgs[_i] = arguments[_i];
            }
            var thisCallbackArgIndex;
            if (callbackArgIndex === void 0) {
                // istanbul ignore next
                thisCallbackArgIndex = callArgs.length > 0 ? callArgs.length - 1 : 0;
            }
            else {
                thisCallbackArgIndex = callbackArgIndex;
            }
            var callbackArg = callArgs[thisCallbackArgIndex];
            if (typeof callbackArg === 'function') {
                fn.apply(context, callArgs);
                return void 0;
            }
            else {
                var args_1 = [];
                // If an explicit callbackArgIndex is set, but the function is called
                // with too few arguments, we want to push undefined onto args so that
                // our constructed callback ends up at the right index.
                var argLen = Math.max(callArgs.length, thisCallbackArgIndex);
                for (var i = 0; i < argLen; i++) {
                    args_1.push(callArgs[i]);
                }
                return new Promise(function (resolve, reject) {
                    args_1.push(function (err, result) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                    });
                    fn.apply(context, args_1);
                });
            }
        };
    }
    module.exports = callbackToPromise;

    },{}],5:[function(require,module,exports){
    var didWarnForDeprecation = {};
    /**
     * Convenience function for marking a function as deprecated.
     *
     * Will emit a warning the first time that function is called.
     *
     * @param fn the function to mark as deprecated.
     * @param key a unique key identifying the function.
     * @param message the warning message.
     *
     * @return a wrapped function
     */
    function deprecate(fn, key, message) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!didWarnForDeprecation[key]) {
                didWarnForDeprecation[key] = true;
                console.warn(message);
            }
            fn.apply(this, args);
        };
    }
    module.exports = deprecate;

    },{}],6:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var internal_config_json_1 = __importDefault(require("./internal_config.json"));
    // "Full Jitter" algorithm taken from https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
    function exponentialBackoffWithJitter(numberOfRetries) {
        var rawBackoffTimeMs = internal_config_json_1.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED * Math.pow(2, numberOfRetries);
        var clippedBackoffTimeMs = Math.min(internal_config_json_1.default.MAX_RETRY_DELAY_IF_RATE_LIMITED, rawBackoffTimeMs);
        var jitteredBackoffTimeMs = Math.random() * clippedBackoffTimeMs;
        return jitteredBackoffTimeMs;
    }
    module.exports = exponentialBackoffWithJitter;

    },{"./internal_config.json":10}],7:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    // istanbul ignore file
    var node_fetch_1 = __importDefault(require("node-fetch"));
    module.exports = typeof window === 'undefined' ? node_fetch_1.default : window.fetch.bind(window);

    },{"node-fetch":20}],8:[function(require,module,exports){
    /* eslint-enable @typescript-eslint/no-explicit-any */
    function has(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }
    module.exports = has;

    },{}],9:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var keys_1 = __importDefault(require("lodash/keys"));
    var isBrowser = typeof window !== 'undefined';
    var HttpHeaders = /** @class */ (function () {
        function HttpHeaders() {
            this._headersByLowercasedKey = {};
        }
        HttpHeaders.prototype.set = function (headerKey, headerValue) {
            var lowercasedKey = headerKey.toLowerCase();
            if (lowercasedKey === 'x-airtable-user-agent') {
                lowercasedKey = 'user-agent';
                headerKey = 'User-Agent';
            }
            this._headersByLowercasedKey[lowercasedKey] = {
                headerKey: headerKey,
                headerValue: headerValue,
            };
        };
        HttpHeaders.prototype.toJSON = function () {
            var result = {};
            for (var _i = 0, _a = keys_1.default(this._headersByLowercasedKey); _i < _a.length; _i++) {
                var lowercasedKey = _a[_i];
                var headerDefinition = this._headersByLowercasedKey[lowercasedKey];
                var headerKey = void 0;
                /* istanbul ignore next */
                if (isBrowser && lowercasedKey === 'user-agent') {
                    // Some browsers do not allow overriding the user agent.
                    // https://github.com/Airtable/airtable.js/issues/52
                    headerKey = 'X-Airtable-User-Agent';
                }
                else {
                    headerKey = headerDefinition.headerKey;
                }
                result[headerKey] = headerDefinition.headerValue;
            }
            return result;
        };
        return HttpHeaders;
    }());
    module.exports = HttpHeaders;

    },{"lodash/keys":93}],10:[function(require,module,exports){
    module.exports={
        "INITIAL_RETRY_DELAY_IF_RATE_LIMITED": 5000,
        "MAX_RETRY_DELAY_IF_RATE_LIMITED": 600000
    };

    },{}],11:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var isArray_1 = __importDefault(require("lodash/isArray"));
    var isNil_1 = __importDefault(require("lodash/isNil"));
    var keys_1 = __importDefault(require("lodash/keys"));
    /* eslint-enable @typescript-eslint/no-explicit-any */
    // Adapted from jQuery.param:
    // https://github.com/jquery/jquery/blob/2.2-stable/src/serialize.js
    function buildParams(prefix, obj, addFn) {
        if (isArray_1.default(obj)) {
            // Serialize array item.
            for (var index = 0; index < obj.length; index++) {
                var value = obj[index];
                if (/\[\]$/.test(prefix)) {
                    // Treat each array item as a scalar.
                    addFn(prefix, value);
                }
                else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + (typeof value === 'object' && value !== null ? index : '') + "]", value, addFn);
                }
            }
        }
        else if (typeof obj === 'object') {
            // Serialize object item.
            for (var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++) {
                var key = _a[_i];
                var value = obj[key];
                buildParams(prefix + "[" + key + "]", value, addFn);
            }
        }
        else {
            // Serialize scalar item.
            addFn(prefix, obj);
        }
    }
    function objectToQueryParamString(obj) {
        var parts = [];
        var addFn = function (key, value) {
            value = isNil_1.default(value) ? '' : value;
            parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        };
        for (var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = obj[key];
            buildParams(key, value, addFn);
        }
        return parts.join('&').replace(/%20/g, '+');
    }
    module.exports = objectToQueryParamString;

    },{"lodash/isArray":79,"lodash/isNil":85,"lodash/keys":93}],12:[function(require,module,exports){
    module.exports = "0.11.4";

    },{}],13:[function(require,module,exports){
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var isFunction_1 = __importDefault(require("lodash/isFunction"));
    var keys_1 = __importDefault(require("lodash/keys"));
    var record_1 = __importDefault(require("./record"));
    var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
    var has_1 = __importDefault(require("./has"));
    var query_params_1 = require("./query_params");
    /**
     * Builds a query object. Won't fetch until `firstPage` or
     * or `eachPage` is called.
     *
     * Params should be validated prior to being passed to Query
     * with `Query.validateParams`.
     */
    var Query = /** @class */ (function () {
        function Query(table, params) {
            this._table = table;
            this._params = params;
            this.firstPage = callback_to_promise_1.default(firstPage, this);
            this.eachPage = callback_to_promise_1.default(eachPage, this, 1);
            this.all = callback_to_promise_1.default(all, this);
        }
        /**
         * Validates the parameters for passing to the Query constructor.
         *
         * @params {object} params parameters to validate
         *
         * @return an object with two keys:
         *  validParams: the object that should be passed to the constructor.
         *  ignoredKeys: a list of keys that will be ignored.
         *  errors: a list of error messages.
         */
        Query.validateParams = function (params) {
            var validParams = {};
            var ignoredKeys = [];
            var errors = [];
            for (var _i = 0, _a = keys_1.default(params); _i < _a.length; _i++) {
                var key = _a[_i];
                var value = params[key];
                if (has_1.default(Query.paramValidators, key)) {
                    var validator = Query.paramValidators[key];
                    var validationResult = validator(value);
                    if (validationResult.pass) {
                        validParams[key] = value;
                    }
                    else {
                        errors.push(validationResult.error);
                    }
                }
                else {
                    ignoredKeys.push(key);
                }
            }
            return {
                validParams: validParams,
                ignoredKeys: ignoredKeys,
                errors: errors,
            };
        };
        Query.paramValidators = query_params_1.paramValidators;
        return Query;
    }());
    /**
     * Fetches the first page of results for the query asynchronously,
     * then calls `done(error, records)`.
     */
    function firstPage(done) {
        if (!isFunction_1.default(done)) {
            throw new Error('The first parameter to `firstPage` must be a function');
        }
        this.eachPage(function (records) {
            done(null, records);
        }, function (error) {
            done(error, null);
        });
    }
    /**
     * Fetches each page of results for the query asynchronously.
     *
     * Calls `pageCallback(records, fetchNextPage)` for each
     * page. You must call `fetchNextPage()` to fetch the next page of
     * results.
     *
     * After fetching all pages, or if there's an error, calls
     * `done(error)`.
     */
    function eachPage(pageCallback, done) {
        var _this = this;
        if (!isFunction_1.default(pageCallback)) {
            throw new Error('The first parameter to `eachPage` must be a function');
        }
        if (!isFunction_1.default(done) && done !== void 0) {
            throw new Error('The second parameter to `eachPage` must be a function or undefined');
        }
        var path = "/" + this._table._urlEncodedNameOrId();
        var params = __assign({}, this._params);
        var inner = function () {
            _this._table._base.runAction('get', path, params, null, function (err, response, result) {
                if (err) {
                    done(err, null);
                }
                else {
                    var next = void 0;
                    if (result.offset) {
                        params.offset = result.offset;
                        next = inner;
                    }
                    else {
                        next = function () {
                            done(null);
                        };
                    }
                    var records = result.records.map(function (recordJson) {
                        return new record_1.default(_this._table, null, recordJson);
                    });
                    pageCallback(records, next);
                }
            });
        };
        inner();
    }
    /**
     * Fetches all pages of results asynchronously. May take a long time.
     */
    function all(done) {
        if (!isFunction_1.default(done)) {
            throw new Error('The first parameter to `all` must be a function');
        }
        var allRecords = [];
        this.eachPage(function (pageRecords, fetchNextPage) {
            allRecords.push.apply(allRecords, pageRecords);
            fetchNextPage();
        }, function (err) {
            if (err) {
                done(err, null);
            }
            else {
                done(null, allRecords);
            }
        });
    }
    module.exports = Query;

    },{"./callback_to_promise":4,"./has":8,"./query_params":14,"./record":15,"lodash/isFunction":83,"lodash/keys":93}],14:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paramValidators = void 0;
    var typecheck_1 = __importDefault(require("./typecheck"));
    var isString_1 = __importDefault(require("lodash/isString"));
    var isNumber_1 = __importDefault(require("lodash/isNumber"));
    var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
    var isBoolean_1 = __importDefault(require("lodash/isBoolean"));
    exports.paramValidators = {
        fields: typecheck_1.default(typecheck_1.default.isArrayOf(isString_1.default), 'the value for `fields` should be an array of strings'),
        filterByFormula: typecheck_1.default(isString_1.default, 'the value for `filterByFormula` should be a string'),
        maxRecords: typecheck_1.default(isNumber_1.default, 'the value for `maxRecords` should be a number'),
        pageSize: typecheck_1.default(isNumber_1.default, 'the value for `pageSize` should be a number'),
        offset: typecheck_1.default(isNumber_1.default, 'the value for `offset` should be a number'),
        sort: typecheck_1.default(typecheck_1.default.isArrayOf(function (obj) {
            return (isPlainObject_1.default(obj) &&
                isString_1.default(obj.field) &&
                (obj.direction === void 0 || ['asc', 'desc'].includes(obj.direction)));
        }), 'the value for `sort` should be an array of sort objects. ' +
            'Each sort object must have a string `field` value, and an optional ' +
            '`direction` value that is "asc" or "desc".'),
        view: typecheck_1.default(isString_1.default, 'the value for `view` should be a string'),
        cellFormat: typecheck_1.default(function (cellFormat) {
            return isString_1.default(cellFormat) && ['json', 'string'].includes(cellFormat);
        }, 'the value for `cellFormat` should be "json" or "string"'),
        timeZone: typecheck_1.default(isString_1.default, 'the value for `timeZone` should be a string'),
        userLocale: typecheck_1.default(isString_1.default, 'the value for `userLocale` should be a string'),
        returnFieldsByFieldId: typecheck_1.default(isBoolean_1.default, 'the value for `returnFieldsByFieldId` should be a boolean'),
    };

    },{"./typecheck":18,"lodash/isBoolean":81,"lodash/isNumber":86,"lodash/isPlainObject":89,"lodash/isString":90}],15:[function(require,module,exports){
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
    var Record = /** @class */ (function () {
        function Record(table, recordId, recordJson) {
            this._table = table;
            this.id = recordId || recordJson.id;
            this.setRawJson(recordJson);
            this.save = callback_to_promise_1.default(save, this);
            this.patchUpdate = callback_to_promise_1.default(patchUpdate, this);
            this.putUpdate = callback_to_promise_1.default(putUpdate, this);
            this.destroy = callback_to_promise_1.default(destroy, this);
            this.fetch = callback_to_promise_1.default(fetch, this);
            this.updateFields = this.patchUpdate;
            this.replaceFields = this.putUpdate;
        }
        Record.prototype.getId = function () {
            return this.id;
        };
        Record.prototype.get = function (columnName) {
            return this.fields[columnName];
        };
        Record.prototype.set = function (columnName, columnValue) {
            this.fields[columnName] = columnValue;
        };
        Record.prototype.setRawJson = function (rawJson) {
            this._rawJson = rawJson;
            this.fields = (this._rawJson && this._rawJson.fields) || {};
        };
        return Record;
    }());
    function save(done) {
        this.putUpdate(this.fields, done);
    }
    function patchUpdate(cellValuesByName, opts, done) {
        var _this = this;
        if (!done) {
            done = opts;
            opts = {};
        }
        var updateBody = __assign({ fields: cellValuesByName }, opts);
        this._table._base.runAction('patch', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, updateBody, function (err, response, results) {
            if (err) {
                done(err);
                return;
            }
            _this.setRawJson(results);
            done(null, _this);
        });
    }
    function putUpdate(cellValuesByName, opts, done) {
        var _this = this;
        if (!done) {
            done = opts;
            opts = {};
        }
        var updateBody = __assign({ fields: cellValuesByName }, opts);
        this._table._base.runAction('put', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, updateBody, function (err, response, results) {
            if (err) {
                done(err);
                return;
            }
            _this.setRawJson(results);
            done(null, _this);
        });
    }
    function destroy(done) {
        var _this = this;
        this._table._base.runAction('delete', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, function (err) {
            if (err) {
                done(err);
                return;
            }
            done(null, _this);
        });
    }
    function fetch(done) {
        var _this = this;
        this._table._base.runAction('get', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, function (err, response, results) {
            if (err) {
                done(err);
                return;
            }
            _this.setRawJson(results);
            done(null, _this);
        });
    }
    module.exports = Record;

    },{"./callback_to_promise":4}],16:[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
    var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
    var package_version_1 = __importDefault(require("./package_version"));
    var fetch_1 = __importDefault(require("./fetch"));
    var abort_controller_1 = __importDefault(require("./abort-controller"));
    var userAgent = "Airtable.js/" + package_version_1.default;
    function runAction(base, method, path, queryParams, bodyData, callback, numAttempts) {
        var url = base._airtable._endpointUrl + "/v" + base._airtable._apiVersionMajor + "/" + base._id + path + "?" + object_to_query_param_string_1.default(queryParams);
        var headers = {
            authorization: "Bearer " + base._airtable._apiKey,
            'x-api-version': base._airtable._apiVersion,
            'x-airtable-application-id': base.getId(),
            'content-type': 'application/json',
        };
        var isBrowser = typeof window !== 'undefined';
        // Some browsers do not allow overriding the user agent.
        // https://github.com/Airtable/airtable.js/issues/52
        if (isBrowser) {
            headers['x-airtable-user-agent'] = userAgent;
        }
        else {
            headers['User-Agent'] = userAgent;
        }
        var controller = new abort_controller_1.default();
        var normalizedMethod = method.toUpperCase();
        var options = {
            method: normalizedMethod,
            headers: headers,
            signal: controller.signal,
        };
        if (bodyData !== null) {
            if (normalizedMethod === 'GET' || normalizedMethod === 'HEAD') {
                console.warn('body argument to runAction are ignored with GET or HEAD requests');
            }
            else {
                options.body = JSON.stringify(bodyData);
            }
        }
        var timeout = setTimeout(function () {
            controller.abort();
        }, base._airtable._requestTimeout);
        fetch_1.default(url, options)
            .then(function (resp) {
            clearTimeout(timeout);
            if (resp.status === 429 && !base._airtable._noRetryIfRateLimited) {
                var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts);
                setTimeout(function () {
                    runAction(base, method, path, queryParams, bodyData, callback, numAttempts + 1);
                }, backoffDelayMs);
            }
            else {
                resp.json()
                    .then(function (body) {
                    var error = base._checkStatusForError(resp.status, body);
                    // Ensure Response interface matches interface from
                    // `request` Response object
                    var r = {};
                    Object.keys(resp).forEach(function (property) {
                        r[property] = resp[property];
                    });
                    r.body = body;
                    r.statusCode = resp.status;
                    callback(error, r, body);
                })
                    .catch(function () {
                    callback(base._checkStatusForError(resp.status));
                });
            }
        })
            .catch(function (error) {
            clearTimeout(timeout);
            callback(error);
        });
    }
    module.exports = runAction;

    },{"./abort-controller":1,"./exponential_backoff_with_jitter":6,"./fetch":7,"./object_to_query_param_string":11,"./package_version":12}],17:[function(require,module,exports){
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
    var deprecate_1 = __importDefault(require("./deprecate"));
    var query_1 = __importDefault(require("./query"));
    var record_1 = __importDefault(require("./record"));
    var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
    var Table = /** @class */ (function () {
        function Table(base, tableId, tableName) {
            if (!tableId && !tableName) {
                throw new Error('Table name or table ID is required');
            }
            this._base = base;
            this.id = tableId;
            this.name = tableName;
            // Public API
            this.find = callback_to_promise_1.default(this._findRecordById, this);
            this.select = this._selectRecords.bind(this);
            this.create = callback_to_promise_1.default(this._createRecords, this);
            this.update = callback_to_promise_1.default(this._updateRecords.bind(this, false), this);
            this.replace = callback_to_promise_1.default(this._updateRecords.bind(this, true), this);
            this.destroy = callback_to_promise_1.default(this._destroyRecord, this);
            // Deprecated API
            this.list = deprecate_1.default(this._listRecords.bind(this), 'table.list', 'Airtable: `list()` is deprecated. Use `select()` instead.');
            this.forEach = deprecate_1.default(this._forEachRecord.bind(this), 'table.forEach', 'Airtable: `forEach()` is deprecated. Use `select()` instead.');
        }
        Table.prototype._findRecordById = function (recordId, done) {
            var record = new record_1.default(this, recordId);
            record.fetch(done);
        };
        Table.prototype._selectRecords = function (params) {
            if (params === void 0) {
                params = {};
            }
            if (arguments.length > 1) {
                console.warn("Airtable: `select` takes only one parameter, but it was given " + arguments.length + " parameters. Use `eachPage` or `firstPage` to fetch records.");
            }
            if (isPlainObject_1.default(params)) {
                var validationResults = query_1.default.validateParams(params);
                if (validationResults.errors.length) {
                    var formattedErrors = validationResults.errors.map(function (error) {
                        return "  * " + error;
                    });
                    throw new Error("Airtable: invalid parameters for `select`:\n" + formattedErrors.join('\n'));
                }
                if (validationResults.ignoredKeys.length) {
                    console.warn("Airtable: the following parameters to `select` will be ignored: " + validationResults.ignoredKeys.join(', '));
                }
                return new query_1.default(this, validationResults.validParams);
            }
            else {
                throw new Error('Airtable: the parameter for `select` should be a plain object or undefined.');
            }
        };
        Table.prototype._urlEncodedNameOrId = function () {
            return this.id || encodeURIComponent(this.name);
        };
        Table.prototype._createRecords = function (recordsData, optionalParameters, done) {
            var _this = this;
            var isCreatingMultipleRecords = Array.isArray(recordsData);
            if (!done) {
                done = optionalParameters;
                optionalParameters = {};
            }
            var requestData;
            if (isCreatingMultipleRecords) {
                requestData = __assign({ records: recordsData }, optionalParameters);
            }
            else {
                requestData = __assign({ fields: recordsData }, optionalParameters);
            }
            this._base.runAction('post', "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
                if (err) {
                    done(err);
                    return;
                }
                var result;
                if (isCreatingMultipleRecords) {
                    result = body.records.map(function (record) {
                        return new record_1.default(_this, record.id, record);
                    });
                }
                else {
                    result = new record_1.default(_this, body.id, body);
                }
                done(null, result);
            });
        };
        Table.prototype._updateRecords = function (isDestructiveUpdate, recordsDataOrRecordId, recordDataOrOptsOrDone, optsOrDone, done) {
            var _this = this;
            var opts;
            if (Array.isArray(recordsDataOrRecordId)) {
                var recordsData = recordsDataOrRecordId;
                opts = isPlainObject_1.default(recordDataOrOptsOrDone) ? recordDataOrOptsOrDone : {};
                done = (optsOrDone || recordDataOrOptsOrDone);
                var method = isDestructiveUpdate ? 'put' : 'patch';
                var requestData = __assign({ records: recordsData }, opts);
                this._base.runAction(method, "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
                    if (err) {
                        done(err);
                        return;
                    }
                    var result = body.records.map(function (record) {
                        return new record_1.default(_this, record.id, record);
                    });
                    done(null, result);
                });
            }
            else {
                var recordId = recordsDataOrRecordId;
                var recordData = recordDataOrOptsOrDone;
                opts = isPlainObject_1.default(optsOrDone) ? optsOrDone : {};
                done = (done || optsOrDone);
                var record = new record_1.default(this, recordId);
                if (isDestructiveUpdate) {
                    record.putUpdate(recordData, opts, done);
                }
                else {
                    record.patchUpdate(recordData, opts, done);
                }
            }
        };
        Table.prototype._destroyRecord = function (recordIdsOrId, done) {
            var _this = this;
            if (Array.isArray(recordIdsOrId)) {
                var queryParams = { records: recordIdsOrId };
                this._base.runAction('delete', "/" + this._urlEncodedNameOrId(), queryParams, null, function (err, response, results) {
                    if (err) {
                        done(err);
                        return;
                    }
                    var records = results.records.map(function (_a) {
                        var id = _a.id;
                        return new record_1.default(_this, id, null);
                    });
                    done(null, records);
                });
            }
            else {
                var record = new record_1.default(this, recordIdsOrId);
                record.destroy(done);
            }
        };
        Table.prototype._listRecords = function (limit, offset, opts, done) {
            var _this = this;
            if (!done) {
                done = opts;
                opts = {};
            }
            var listRecordsParameters = __assign({ limit: limit,
                offset: offset }, opts);
            this._base.runAction('get', "/" + this._urlEncodedNameOrId() + "/", listRecordsParameters, null, function (err, response, results) {
                if (err) {
                    done(err);
                    return;
                }
                var records = results.records.map(function (recordJson) {
                    return new record_1.default(_this, null, recordJson);
                });
                done(null, records, results.offset);
            });
        };
        Table.prototype._forEachRecord = function (opts, callback, done) {
            var _this = this;
            if (arguments.length === 2) {
                done = callback;
                callback = opts;
                opts = {};
            }
            var limit = Table.__recordsPerPageForIteration || 100;
            var offset = null;
            var nextPage = function () {
                _this._listRecords(limit, offset, opts, function (err, page, newOffset) {
                    if (err) {
                        done(err);
                        return;
                    }
                    for (var index = 0; index < page.length; index++) {
                        callback(page[index]);
                    }
                    if (newOffset) {
                        offset = newOffset;
                        nextPage();
                    }
                    else {
                        done();
                    }
                });
            };
            nextPage();
        };
        return Table;
    }());
    module.exports = Table;

    },{"./callback_to_promise":4,"./deprecate":5,"./query":13,"./record":15,"lodash/isPlainObject":89}],18:[function(require,module,exports){
    /* eslint-enable @typescript-eslint/no-explicit-any */
    function check(fn, error) {
        return function (value) {
            if (fn(value)) {
                return { pass: true };
            }
            else {
                return { pass: false, error: error };
            }
        };
    }
    check.isOneOf = function isOneOf(options) {
        return options.includes.bind(options);
    };
    check.isArrayOf = function (itemValidator) {
        return function (value) {
            return Array.isArray(value) && value.every(itemValidator);
        };
    };
    module.exports = check;

    },{}],19:[function(require,module,exports){

    Object.defineProperty(exports, '__esModule', { value: true });

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
    }

    var Emitter =
    /*#__PURE__*/
    function () {
      function Emitter() {
        _classCallCheck(this, Emitter);

        Object.defineProperty(this, 'listeners', {
          value: {},
          writable: true,
          configurable: true
        });
      }

      _createClass(Emitter, [{
        key: "addEventListener",
        value: function addEventListener(type, callback) {
          if (!(type in this.listeners)) {
            this.listeners[type] = [];
          }

          this.listeners[type].push(callback);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(type, callback) {
          if (!(type in this.listeners)) {
            return;
          }

          var stack = this.listeners[type];

          for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
              stack.splice(i, 1);
              return;
            }
          }
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
          var _this = this;

          if (!(event.type in this.listeners)) {
            return;
          }

          var debounce = function debounce(callback) {
            setTimeout(function () {
              return callback.call(_this, event);
            });
          };

          var stack = this.listeners[event.type];

          for (var i = 0, l = stack.length; i < l; i++) {
            debounce(stack[i]);
          }

          return !event.defaultPrevented;
        }
      }]);

      return Emitter;
    }();

    var AbortSignal =
    /*#__PURE__*/
    function (_Emitter) {
      _inherits(AbortSignal, _Emitter);

      function AbortSignal() {
        var _this2;

        _classCallCheck(this, AbortSignal);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AbortSignal).call(this)); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
        // constructor has failed to run, then "this.listeners" will still be undefined and then we call
        // the parent constructor directly instead as a workaround. For general details, see babel bug:
        // https://github.com/babel/babel/issues/3041
        // This hack was added as a fix for the issue described here:
        // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

        if (!_this2.listeners) {
          Emitter.call(_assertThisInitialized(_this2));
        } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
        // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


        Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
          value: false,
          writable: true,
          configurable: true
        });
        Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
          value: null,
          writable: true,
          configurable: true
        });
        return _this2;
      }

      _createClass(AbortSignal, [{
        key: "toString",
        value: function toString() {
          return '[object AbortSignal]';
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
          if (event.type === 'abort') {
            this.aborted = true;

            if (typeof this.onabort === 'function') {
              this.onabort.call(this, event);
            }
          }

          _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
        }
      }]);

      return AbortSignal;
    }(Emitter);
    var AbortController =
    /*#__PURE__*/
    function () {
      function AbortController() {
        _classCallCheck(this, AbortController);

        // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
        // we want Object.keys(new AbortController()) to be [] for compat with the native impl
        Object.defineProperty(this, 'signal', {
          value: new AbortSignal(),
          writable: true,
          configurable: true
        });
      }

      _createClass(AbortController, [{
        key: "abort",
        value: function abort() {
          var event;

          try {
            event = new Event('abort');
          } catch (e) {
            if (typeof document !== 'undefined') {
              if (!document.createEvent) {
                // For Internet Explorer 8:
                event = document.createEventObject();
                event.type = 'abort';
              } else {
                // For Internet Explorer 11:
                event = document.createEvent('Event');
                event.initEvent('abort', false, false);
              }
            } else {
              // Fallback where document isn't available:
              event = {
                type: 'abort',
                bubbles: false,
                cancelable: false
              };
            }
          }

          this.signal.dispatchEvent(event);
        }
      }, {
        key: "toString",
        value: function toString() {
          return '[object AbortController]';
        }
      }]);

      return AbortController;
    }();

    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      // These are necessary to make sure that we get correct output for:
      // Object.prototype.toString.call(new AbortController())
      AbortController.prototype[Symbol.toStringTag] = 'AbortController';
      AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
    }

    function polyfillNeeded(self) {
      if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
        console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
        return true;
      } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
      // defining window.Request, and this polyfill need to work on top of unfetch
      // so the below feature detection needs the !self.AbortController part.
      // The Request.prototype check is also needed because Safari versions 11.1.2
      // up to and including 12.1.x has a window.AbortController present but still
      // does NOT correctly implement abortable fetch:
      // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


      return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
    }

    /**
     * Note: the "fetch.Request" default value is available for fetch imported from
     * the "node-fetch" package and not in browsers. This is OK since browsers
     * will be importing umd-polyfill.js from that path "self" is passed the
     * decorator so the default value will not be used (because browsers that define
     * fetch also has Request). One quirky setup where self.fetch exists but
     * self.Request does not is when the "unfetch" minimal fetch polyfill is used
     * on top of IE11; for this case the browser will try to use the fetch.Request
     * default value which in turn will be undefined but then then "if (Request)"
     * will ensure that you get a patched fetch but still no Request (as expected).
     * @param {fetch, Request = fetch.Request}
     * @returns {fetch: abortableFetch, Request: AbortableRequest}
     */

    function abortableFetchDecorator(patchTargets) {
      if ('function' === typeof patchTargets) {
        patchTargets = {
          fetch: patchTargets
        };
      }

      var _patchTargets = patchTargets,
          fetch = _patchTargets.fetch,
          _patchTargets$Request = _patchTargets.Request,
          NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
          NativeAbortController = _patchTargets.AbortController,
          _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
          __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;

      if (!polyfillNeeded({
        fetch: fetch,
        Request: NativeRequest,
        AbortController: NativeAbortController,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
      })) {
        return {
          fetch: fetch,
          Request: Request
        };
      }

      var Request = NativeRequest; // Note that the "unfetch" minimal fetch polyfill defines fetch() without
      // defining window.Request, and this polyfill need to work on top of unfetch
      // hence we only patch it if it's available. Also we don't patch it if signal
      // is already available on the Request prototype because in this case support
      // is present and the patching below can cause a crash since it assigns to
      // request.signal which is technically a read-only property. This latter error
      // happens when you run the main5.js node-fetch example in the repo
      // "abortcontroller-polyfill-examples". The exact error is:
      //   request.signal = init.signal;
      //   ^
      // TypeError: Cannot set property signal of #<Request> which has only a getter

      if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
        Request = function Request(input, init) {
          var signal;

          if (init && init.signal) {
            signal = init.signal; // Never pass init.signal to the native Request implementation when the polyfill has
            // been installed because if we're running on top of a browser with a
            // working native AbortController (i.e. the polyfill was installed due to
            // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
            // fake AbortSignal to the native fetch will trigger:
            // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.

            delete init.signal;
          }

          var request = new NativeRequest(input, init);

          if (signal) {
            Object.defineProperty(request, 'signal', {
              writable: false,
              enumerable: false,
              configurable: true,
              value: signal
            });
          }

          return request;
        };

        Request.prototype = NativeRequest.prototype;
      }

      var realFetch = fetch;

      var abortableFetch = function abortableFetch(input, init) {
        var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;

        if (signal) {
          var abortError;

          try {
            abortError = new DOMException('Aborted', 'AbortError');
          } catch (err) {
            // IE 11 does not support calling the DOMException constructor, use a
            // regular error object on it instead.
            abortError = new Error('Aborted');
            abortError.name = 'AbortError';
          } // Return early if already aborted, thus avoiding making an HTTP request


          if (signal.aborted) {
            return Promise.reject(abortError);
          } // Turn an event into a promise, reject it once `abort` is dispatched


          var cancellation = new Promise(function (_, reject) {
            signal.addEventListener('abort', function () {
              return reject(abortError);
            }, {
              once: true
            });
          });

          if (init && init.signal) {
            // Never pass .signal to the native implementation when the polyfill has
            // been installed because if we're running on top of a browser with a
            // working native AbortController (i.e. the polyfill was installed due to
            // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
            // fake AbortSignal to the native fetch will trigger:
            // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
            delete init.signal;
          } // Return the fastest promise (don't need to wait for request to finish)


          return Promise.race([cancellation, realFetch(input, init)]);
        }

        return realFetch(input, init);
      };

      return {
        fetch: abortableFetch,
        Request: Request
      };
    }

    exports.AbortController = AbortController;
    exports.AbortSignal = AbortSignal;
    exports.abortableFetch = abortableFetchDecorator;

    },{}],20:[function(require,module,exports){

    },{}],21:[function(require,module,exports){
    var hashClear = require('./_hashClear'),
        hashDelete = require('./_hashDelete'),
        hashGet = require('./_hashGet'),
        hashHas = require('./_hashHas'),
        hashSet = require('./_hashSet');

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    module.exports = Hash;

    },{"./_hashClear":46,"./_hashDelete":47,"./_hashGet":48,"./_hashHas":49,"./_hashSet":50}],22:[function(require,module,exports){
    var listCacheClear = require('./_listCacheClear'),
        listCacheDelete = require('./_listCacheDelete'),
        listCacheGet = require('./_listCacheGet'),
        listCacheHas = require('./_listCacheHas'),
        listCacheSet = require('./_listCacheSet');

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    module.exports = ListCache;

    },{"./_listCacheClear":56,"./_listCacheDelete":57,"./_listCacheGet":58,"./_listCacheHas":59,"./_listCacheSet":60}],23:[function(require,module,exports){
    var getNative = require('./_getNative'),
        root = require('./_root');

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map');

    module.exports = Map;

    },{"./_getNative":42,"./_root":72}],24:[function(require,module,exports){
    var mapCacheClear = require('./_mapCacheClear'),
        mapCacheDelete = require('./_mapCacheDelete'),
        mapCacheGet = require('./_mapCacheGet'),
        mapCacheHas = require('./_mapCacheHas'),
        mapCacheSet = require('./_mapCacheSet');

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    module.exports = MapCache;

    },{"./_mapCacheClear":61,"./_mapCacheDelete":62,"./_mapCacheGet":63,"./_mapCacheHas":64,"./_mapCacheSet":65}],25:[function(require,module,exports){
    var root = require('./_root');

    /** Built-in value references. */
    var Symbol = root.Symbol;

    module.exports = Symbol;

    },{"./_root":72}],26:[function(require,module,exports){
    var baseTimes = require('./_baseTimes'),
        isArguments = require('./isArguments'),
        isArray = require('./isArray'),
        isBuffer = require('./isBuffer'),
        isIndex = require('./_isIndex'),
        isTypedArray = require('./isTypedArray');

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    module.exports = arrayLikeKeys;

    },{"./_baseTimes":35,"./_isIndex":51,"./isArguments":78,"./isArray":79,"./isBuffer":82,"./isTypedArray":92}],27:[function(require,module,exports){
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    module.exports = arrayMap;

    },{}],28:[function(require,module,exports){
    var eq = require('./eq');

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    module.exports = assocIndexOf;

    },{"./eq":76}],29:[function(require,module,exports){
    var castPath = require('./_castPath'),
        toKey = require('./_toKey');

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    module.exports = baseGet;

    },{"./_castPath":38,"./_toKey":74}],30:[function(require,module,exports){
    var Symbol = require('./_Symbol'),
        getRawTag = require('./_getRawTag'),
        objectToString = require('./_objectToString');

    /** `Object#toString` result references. */
    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

    /** Built-in value references. */
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    module.exports = baseGetTag;

    },{"./_Symbol":25,"./_getRawTag":44,"./_objectToString":70}],31:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]';

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    module.exports = baseIsArguments;

    },{"./_baseGetTag":30,"./isObjectLike":88}],32:[function(require,module,exports){
    var isFunction = require('./isFunction'),
        isMasked = require('./_isMasked'),
        isObject = require('./isObject'),
        toSource = require('./_toSource');

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used for built-in method references. */
    var funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module.exports = baseIsNative;

    },{"./_isMasked":54,"./_toSource":75,"./isFunction":83,"./isObject":87}],33:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isLength = require('./isLength'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
    typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
    typedArrayTags[setTag] = typedArrayTags[stringTag] =
    typedArrayTags[weakMapTag] = false;

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    module.exports = baseIsTypedArray;

    },{"./_baseGetTag":30,"./isLength":84,"./isObjectLike":88}],34:[function(require,module,exports){
    var isPrototype = require('./_isPrototype'),
        nativeKeys = require('./_nativeKeys');

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    module.exports = baseKeys;

    },{"./_isPrototype":55,"./_nativeKeys":68}],35:[function(require,module,exports){
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    module.exports = baseTimes;

    },{}],36:[function(require,module,exports){
    var Symbol = require('./_Symbol'),
        arrayMap = require('./_arrayMap'),
        isArray = require('./isArray'),
        isSymbol = require('./isSymbol');

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    module.exports = baseToString;

    },{"./_Symbol":25,"./_arrayMap":27,"./isArray":79,"./isSymbol":91}],37:[function(require,module,exports){
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }

    module.exports = baseUnary;

    },{}],38:[function(require,module,exports){
    var isArray = require('./isArray'),
        isKey = require('./_isKey'),
        stringToPath = require('./_stringToPath'),
        toString = require('./toString');

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    module.exports = castPath;

    },{"./_isKey":52,"./_stringToPath":73,"./isArray":79,"./toString":96}],39:[function(require,module,exports){
    var root = require('./_root');

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__'];

    module.exports = coreJsData;

    },{"./_root":72}],40:[function(require,module,exports){
    (function (global){
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    module.exports = freeGlobal;

    }).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    },{}],41:[function(require,module,exports){
    var isKeyable = require('./_isKeyable');

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    module.exports = getMapData;

    },{"./_isKeyable":53}],42:[function(require,module,exports){
    var baseIsNative = require('./_baseIsNative'),
        getValue = require('./_getValue');

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    module.exports = getNative;

    },{"./_baseIsNative":32,"./_getValue":45}],43:[function(require,module,exports){
    var overArg = require('./_overArg');

    /** Built-in value references. */
    var getPrototype = overArg(Object.getPrototypeOf, Object);

    module.exports = getPrototype;

    },{"./_overArg":71}],44:[function(require,module,exports){
    var Symbol = require('./_Symbol');

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Built-in value references. */
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    module.exports = getRawTag;

    },{"./_Symbol":25}],45:[function(require,module,exports){
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    module.exports = getValue;

    },{}],46:[function(require,module,exports){
    var nativeCreate = require('./_nativeCreate');

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    module.exports = hashClear;

    },{"./_nativeCreate":67}],47:[function(require,module,exports){
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = hashDelete;

    },{}],48:[function(require,module,exports){
    var nativeCreate = require('./_nativeCreate');

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    module.exports = hashGet;

    },{"./_nativeCreate":67}],49:[function(require,module,exports){
    var nativeCreate = require('./_nativeCreate');

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    module.exports = hashHas;

    },{"./_nativeCreate":67}],50:[function(require,module,exports){
    var nativeCreate = require('./_nativeCreate');

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    module.exports = hashSet;

    },{"./_nativeCreate":67}],51:[function(require,module,exports){
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    module.exports = isIndex;

    },{}],52:[function(require,module,exports){
    var isArray = require('./isArray'),
        isSymbol = require('./isSymbol');

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    module.exports = isKey;

    },{"./isArray":79,"./isSymbol":91}],53:[function(require,module,exports){
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    module.exports = isKeyable;

    },{}],54:[function(require,module,exports){
    var coreJsData = require('./_coreJsData');

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    module.exports = isMasked;

    },{"./_coreJsData":39}],55:[function(require,module,exports){
    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    module.exports = isPrototype;

    },{}],56:[function(require,module,exports){
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    module.exports = listCacheClear;

    },{}],57:[function(require,module,exports){
    var assocIndexOf = require('./_assocIndexOf');

    /** Used for built-in method references. */
    var arrayProto = Array.prototype;

    /** Built-in value references. */
    var splice = arrayProto.splice;

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    module.exports = listCacheDelete;

    },{"./_assocIndexOf":28}],58:[function(require,module,exports){
    var assocIndexOf = require('./_assocIndexOf');

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    module.exports = listCacheGet;

    },{"./_assocIndexOf":28}],59:[function(require,module,exports){
    var assocIndexOf = require('./_assocIndexOf');

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    module.exports = listCacheHas;

    },{"./_assocIndexOf":28}],60:[function(require,module,exports){
    var assocIndexOf = require('./_assocIndexOf');

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    module.exports = listCacheSet;

    },{"./_assocIndexOf":28}],61:[function(require,module,exports){
    var Hash = require('./_Hash'),
        ListCache = require('./_ListCache'),
        Map = require('./_Map');

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    module.exports = mapCacheClear;

    },{"./_Hash":21,"./_ListCache":22,"./_Map":23}],62:[function(require,module,exports){
    var getMapData = require('./_getMapData');

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    module.exports = mapCacheDelete;

    },{"./_getMapData":41}],63:[function(require,module,exports){
    var getMapData = require('./_getMapData');

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    module.exports = mapCacheGet;

    },{"./_getMapData":41}],64:[function(require,module,exports){
    var getMapData = require('./_getMapData');

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    module.exports = mapCacheHas;

    },{"./_getMapData":41}],65:[function(require,module,exports){
    var getMapData = require('./_getMapData');

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    module.exports = mapCacheSet;

    },{"./_getMapData":41}],66:[function(require,module,exports){
    var memoize = require('./memoize');

    /** Used as the maximum memoize cache size. */
    var MAX_MEMOIZE_SIZE = 500;

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    module.exports = memoizeCapped;

    },{"./memoize":94}],67:[function(require,module,exports){
    var getNative = require('./_getNative');

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create');

    module.exports = nativeCreate;

    },{"./_getNative":42}],68:[function(require,module,exports){
    var overArg = require('./_overArg');

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = overArg(Object.keys, Object);

    module.exports = nativeKeys;

    },{"./_overArg":71}],69:[function(require,module,exports){
    var freeGlobal = require('./_freeGlobal');

    /** Detect free variable `exports`. */
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process;

    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function() {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        }

        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }());

    module.exports = nodeUtil;

    },{"./_freeGlobal":40}],70:[function(require,module,exports){
    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    module.exports = objectToString;

    },{}],71:[function(require,module,exports){
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }

    module.exports = overArg;

    },{}],72:[function(require,module,exports){
    var freeGlobal = require('./_freeGlobal');

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    module.exports = root;

    },{"./_freeGlobal":40}],73:[function(require,module,exports){
    var memoizeCapped = require('./_memoizeCapped');

    /** Used to match property names within property paths. */
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    module.exports = stringToPath;

    },{"./_memoizeCapped":66}],74:[function(require,module,exports){
    var isSymbol = require('./isSymbol');

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    module.exports = toKey;

    },{"./isSymbol":91}],75:[function(require,module,exports){
    /** Used for built-in method references. */
    var funcProto = Function.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    module.exports = toSource;

    },{}],76:[function(require,module,exports){
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    module.exports = eq;

    },{}],77:[function(require,module,exports){
    var baseGet = require('./_baseGet');

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;

    },{"./_baseGet":29}],78:[function(require,module,exports){
    var baseIsArguments = require('./_baseIsArguments'),
        isObjectLike = require('./isObjectLike');

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    module.exports = isArguments;

    },{"./_baseIsArguments":31,"./isObjectLike":88}],79:[function(require,module,exports){
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    module.exports = isArray;

    },{}],80:[function(require,module,exports){
    var isFunction = require('./isFunction'),
        isLength = require('./isLength');

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    module.exports = isArrayLike;

    },{"./isFunction":83,"./isLength":84}],81:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var boolTag = '[object Boolean]';

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    module.exports = isBoolean;

    },{"./_baseGetTag":30,"./isObjectLike":88}],82:[function(require,module,exports){
    var root = require('./_root'),
        stubFalse = require('./stubFalse');

    /** Detect free variable `exports`. */
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    module.exports = isBuffer;

    },{"./_root":72,"./stubFalse":95}],83:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isObject = require('./isObject');

    /** `Object#toString` result references. */
    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    module.exports = isFunction;

    },{"./_baseGetTag":30,"./isObject":87}],84:[function(require,module,exports){
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    module.exports = isLength;

    },{}],85:[function(require,module,exports){
    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    module.exports = isNil;

    },{}],86:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var numberTag = '[object Number]';

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    module.exports = isNumber;

    },{"./_baseGetTag":30,"./isObjectLike":88}],87:[function(require,module,exports){
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    module.exports = isObject;

    },{}],88:[function(require,module,exports){
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    module.exports = isObjectLike;

    },{}],89:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        getPrototype = require('./_getPrototype'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var objectTag = '[object Object]';

    /** Used for built-in method references. */
    var funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    module.exports = isPlainObject;

    },{"./_baseGetTag":30,"./_getPrototype":43,"./isObjectLike":88}],90:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isArray = require('./isArray'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var stringTag = '[object String]';

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    module.exports = isString;

    },{"./_baseGetTag":30,"./isArray":79,"./isObjectLike":88}],91:[function(require,module,exports){
    var baseGetTag = require('./_baseGetTag'),
        isObjectLike = require('./isObjectLike');

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    module.exports = isSymbol;

    },{"./_baseGetTag":30,"./isObjectLike":88}],92:[function(require,module,exports){
    var baseIsTypedArray = require('./_baseIsTypedArray'),
        baseUnary = require('./_baseUnary'),
        nodeUtil = require('./_nodeUtil');

    /* Node.js helper references. */
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    module.exports = isTypedArray;

    },{"./_baseIsTypedArray":33,"./_baseUnary":37,"./_nodeUtil":69}],93:[function(require,module,exports){
    var arrayLikeKeys = require('./_arrayLikeKeys'),
        baseKeys = require('./_baseKeys'),
        isArrayLike = require('./isArrayLike');

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    module.exports = keys;

    },{"./_arrayLikeKeys":26,"./_baseKeys":34,"./isArrayLike":80}],94:[function(require,module,exports){
    var MapCache = require('./_MapCache');

    /** Error message constants. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    module.exports = memoize;

    },{"./_MapCache":24}],95:[function(require,module,exports){
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    module.exports = stubFalse;

    },{}],96:[function(require,module,exports){
    var baseToString = require('./_baseToString');

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    module.exports = toString;

    },{"./_baseToString":36}],"airtable":[function(require,module,exports){
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    var base_1 = __importDefault(require("./base"));
    var record_1 = __importDefault(require("./record"));
    var table_1 = __importDefault(require("./table"));
    var airtable_error_1 = __importDefault(require("./airtable_error"));
    var Airtable = /** @class */ (function () {
        function Airtable(opts) {
            if (opts === void 0) { opts = {}; }
            var defaultConfig = Airtable.default_config();
            var apiVersion = opts.apiVersion || Airtable.apiVersion || defaultConfig.apiVersion;
            Object.defineProperties(this, {
                _apiKey: {
                    value: opts.apiKey || Airtable.apiKey || defaultConfig.apiKey,
                },
                _apiVersion: {
                    value: apiVersion,
                },
                _apiVersionMajor: {
                    value: apiVersion.split('.')[0],
                },
                _customHeaders: {
                    value: opts.customHeaders || {},
                },
                _endpointUrl: {
                    value: opts.endpointUrl || Airtable.endpointUrl || defaultConfig.endpointUrl,
                },
                _noRetryIfRateLimited: {
                    value: opts.noRetryIfRateLimited ||
                        Airtable.noRetryIfRateLimited ||
                        defaultConfig.noRetryIfRateLimited,
                },
                _requestTimeout: {
                    value: opts.requestTimeout || Airtable.requestTimeout || defaultConfig.requestTimeout,
                },
            });
            if (!this._apiKey) {
                throw new Error('An API key is required to connect to Airtable');
            }
        }
        Airtable.prototype.base = function (baseId) {
            return base_1.default.createFunctor(this, baseId);
        };
        Airtable.default_config = function () {
            return {
                endpointUrl: 'https://api.airtable.com',
                apiVersion: '0.1.0',
                apiKey: undefined,
                noRetryIfRateLimited: false,
                requestTimeout: 300 * 1000,
            };
        };
        Airtable.configure = function (_a) {
            var apiKey = _a.apiKey, endpointUrl = _a.endpointUrl, apiVersion = _a.apiVersion, noRetryIfRateLimited = _a.noRetryIfRateLimited, requestTimeout = _a.requestTimeout;
            Airtable.apiKey = apiKey;
            Airtable.endpointUrl = endpointUrl;
            Airtable.apiVersion = apiVersion;
            Airtable.noRetryIfRateLimited = noRetryIfRateLimited;
            Airtable.requestTimeout = requestTimeout;
        };
        Airtable.base = function (baseId) {
            return new Airtable().base(baseId);
        };
        Airtable.Base = base_1.default;
        Airtable.Record = record_1.default;
        Airtable.Table = table_1.default;
        Airtable.Error = airtable_error_1.default;
        return Airtable;
    }());
    module.exports = Airtable;

    },{"./airtable_error":2,"./base":3,"./record":15,"./table":17}]},{},["airtable"])("airtable")
    });
    });

    var Airtable = /*@__PURE__*/getDefaultExportFromCjs(airtable_umd);

    class Choozr$1 {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }

    class ChoozrId {
        constructor(value) {
            this.value = value;
        }
    }

    class RESTChoozrOutputAdapter {
        async createChoozrWith(choozrName, loginParameters) {
            const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
            const records = await airtable("Choozr").create([
                {
                    "fields": {
                        "name": choozrName.value
                    }
                },
            ]);
            return records.map(record => new Choozr$1(new ChoozrId(record.id), new ChoozrName(record.get("name"))))[0];
        }
    }

    class TeamService {
        constructor(createTeamPort, getLoginParametersPort) {
            this.createTeamPort = createTeamPort;
            this.getLoginParametersPort = getLoginParametersPort;
        }
        async createTeamWith(choozrId, teamName) {
            const loginParameters = this.getLoginParametersPort.getLoginParameters();
            return await this.createTeamPort.createTeamWith(choozrId, teamName, loginParameters);
        }
    }

    class Choozr {
        constructor(id, name, choozrId) {
            this.id = id;
            this.name = name;
            this.choozrId = choozrId;
        }
    }

    class TeamId {
        constructor(value) {
            this.value = value;
        }
    }

    class TeamName {
        constructor(value) {
            this.value = value;
        }
    }

    class RESTTeamOutputAdapter {
        constructor() {
            this.recordToTeam = (record) => {
                return new Choozr(new TeamId(record.id), new TeamName(record.get("name")), new ChoozrId(record.get("id (from Choozr)")));
            };
        }
        async createTeamWith(choozrId, teamName, loginParameters) {
            const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
            const records = await airtable("Team").create([
                {
                    "fields": {
                        "name": teamName.value,
                        "Choozr": [
                            choozrId.value
                        ]
                    }
                },
            ]);
            return records.map(this.recordToTeam)[0];
        }
    }

    /* src/ui/App.svelte generated by Svelte v3.48.0 */

    function create_fragment(ctx) {
    	let router;
    	let current;

    	router = new Router({
    			props: { routes: /*routes*/ ctx[0] },
    			$$inline: true
    		});

    	router.$on("routeEvent", /*handleRouteEvent*/ ctx[1]);

    	const block = {
    		c: function create() {
    			create_component(router.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(router, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(router.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(router.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(router, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const routes = { "/": Login, "/home": Home };
    	const inMemoryLoginParamersRepository = new InMemoryLoginParametersOutputAdapter();
    	const restChoozrOutputAdapter = new RESTChoozrOutputAdapter();
    	const restTeamOutputAdapter = new RESTTeamOutputAdapter();
    	setContext("loginUseCase", new AuthenticationService(inMemoryLoginParamersRepository));
    	setContext("createChoozrUseCase", new ChoozrService(restChoozrOutputAdapter, inMemoryLoginParamersRepository));
    	setContext("createTeamUseCase", new TeamService(restTeamOutputAdapter, inMemoryLoginParamersRepository));

    	async function handleRouteEvent(event) {
    		const eventDetail = event.detail;

    		if (eventDetail == Logged) {
    			await push("/home");
    		} else if (eventDetail instanceof ChoozrCreated) {
    			await push(`/choozr/${eventDetail.choozrId.value}`);
    		}
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		setContext,
    		Router,
    		push,
    		InMemoryLoginParametersRepository: InMemoryLoginParametersOutputAdapter,
    		AuthenticationService,
    		Login,
    		Home,
    		ChoozrCreated,
    		Logged,
    		ChoozrService,
    		RESTChoozrOutputAdapter,
    		TeamService,
    		RESTTeamOutputAdapter,
    		routes,
    		inMemoryLoginParamersRepository,
    		restChoozrOutputAdapter,
    		restTeamOutputAdapter,
    		handleRouteEvent
    	});

    	return [routes, handleRouteEvent];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
