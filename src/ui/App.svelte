<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersOutputAdapter";
  import AuthenticationService from "../port/AuthenticationService";
  import type GetLoginParametersPort from "../port/output/GetLoginParametersPort";
  import Login from "./Login.svelte";
  import Test from "./Home.svelte";
  import { RouteEventDetail } from "./RouteEvent";

  const routes = {
    "/": Login,
    "/test": Test,
  };
  const inMemoryLoginParamersRepository =
    new InMemoryLoginParametersRepository();

  setContext(
    "loginUseCase",
    new AuthenticationService(inMemoryLoginParamersRepository)
  );

  async function handleRouteEvent(event: CustomEvent<RouteEventDetail>) {
    if (event.detail == RouteEventDetail.Logged) {
      await push("/test");
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
