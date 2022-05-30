<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersRepository";
  import AuthenticationService from "../port/AuthenticationService";
  import type GetLoginParametersPort from "../port/output/GetLoginParametersPort";
  import Login from "./Login.svelte";
  import Test from "./Test.svelte";

  const routes = {
    "/": Login,
    "/test": Test,
  };
  const inMemoryLoginParamersRepository =
    new InMemoryLoginParametersRepository();

  setContext(
    "loginUseCase",
    new AuthenticationService(
      inMemoryLoginParamersRepository,
      inMemoryLoginParamersRepository
    )
  );

  function handleRouteEvent(event: CustomEvent) {
    if (event.detail.login == "logged") {
      push("/test");
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
