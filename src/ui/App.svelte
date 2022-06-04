<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersOutputAdapter";
  import AuthenticationService from "../port/AuthenticationService";
  import Login from "./Login.svelte";
  import Home from "./Home.svelte";
  import { ChoozrCreated, Logged, RouteEventDetail } from "./RouteEvent";
  import ChoozrService from "../port/ChoozrService";
  import RESTChoozrOutputAdapter from "../adapter/output/RESTChoozrOutputAdapter";

  const routes = {
    "/": Login,
    "/home": Home,
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
    const eventDetail = event.detail;

    if (eventDetail == Logged) {
      await push("/home");
    } else if (eventDetail instanceof ChoozrCreated) {
      await push(`/choozr/${eventDetail.choozrId.value}`);
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
