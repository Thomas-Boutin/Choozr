# Choozr

Svelte app that helps generate random teams with a QrCode.

It either connects to Airtable or Firebase. See [App.svelte](https://github.com/Thomas-Boutin/Choozr/blob/main/src/ui/App.svelte)

A GitHub pages website is automatically deployed to https://thomas-boutin.github.io/Choozr/

## Configuration

To use Firebase or Airtable,  call the appropriate initializer in [App.svelte]([https://github.com/Thomas-Boutin/Choozr/blob/main/src/ui/App.svelte](https://github.com/Thomas-Boutin/Choozr/blob/main/src/ui/App.svelte#L36).

If you choose to use firebase, change the app configuration in [FirebaseInitializer.ts](https://github.com/Thomas-Boutin/Choozr/blob/main/src/adapter/output/FirebaseInitializer.ts). 

## Technical specifications

- Hexagonal architecture
- Typescript
- DI with svelte context
- Unit Testing with Jest

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `docs`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv docs --single"
```
