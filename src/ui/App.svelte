<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import AuthenticationService from "../port/AuthenticationService";
  import Login from "./Login.svelte";
  import Test from "./Test.svelte";

  const routes = {
    "/": Login,
    "/test": Test,
  };
  setContext("loginUseCase", new AuthenticationService());

  function handleRouteEvent(event: CustomEvent) {
    if (event.detail.login == "logged") {
      push("/test");
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
