<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersOutputAdapter";
  import AuthenticationService from "../port/AuthenticationService";
  import Login from "./Login.svelte";
  import Test from "./Home.svelte";
  import { Logged, RouteEventDetail } from "./RouteEvent";
  import ChoozrService from "../port/ChoozrService";
  import RESTChoozrOutputAdapter from "../adapter/output/RESTChoozrOutputAdapter";

  const routes = {
    "/": Login,
    "/test": Test,
  };
  const inMemoryLoginParamersRepository =
    new InMemoryLoginParametersRepository();
  const restChoozrOutputAdapter = new RESTChoozrOutputAdapter();

  setContext(
    "loginUseCase",
    new AuthenticationService(inMemoryLoginParamersRepository)
  );
  setContext(
    "createChoozrUseCase",
    new ChoozrService(restChoozrOutputAdapter, inMemoryLoginParamersRepository)
  );

  async function handleRouteEvent(event: CustomEvent<RouteEventDetail>) {
    if (event.detail == Logged) {
      await push("/test");
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
