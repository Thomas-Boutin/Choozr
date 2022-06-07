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
  import TeamService from "../port/TeamService";
  import RESTTeamOutputAdapter from "../adapter/output/RESTTeamOutputAdapter";
  import Choozr from "./Choozr.svelte";
  import MemberService from "../port/MemberService";
  import RESTMemberOutputAdapter from "../adapter/output/RESTMemberOutputAdapter";
  import JoinChoozr from "./JoinChoozr.svelte";

  const routes = {
    "/": Login,
    "/home": Home,
    "/choozrs/:choozrId": Choozr,
    "/choozrs/:choozrId/join": JoinChoozr,
  };
  const inMemoryLoginParamersRepository =
    new InMemoryLoginParametersRepository();
  const restChoozrOutputAdapter = new RESTChoozrOutputAdapter();
  const restTeamOutputAdapter = new RESTTeamOutputAdapter();
  const restMemberOutputAdapter = new RESTMemberOutputAdapter();
  const choozrService = new ChoozrService(
    restChoozrOutputAdapter,
    inMemoryLoginParamersRepository
  );

  setContext(
    "loginUseCase",
    new AuthenticationService(inMemoryLoginParamersRepository)
  );
  setContext("createChoozrUseCase", choozrService);
  setContext("generateJoinChoozrURLUseCase", choozrService);
  setContext(
    "createTeamUseCase",
    new TeamService(restTeamOutputAdapter, inMemoryLoginParamersRepository)
  );
  setContext(
    "joinChoozrUseCase",
    new MemberService(
      restMemberOutputAdapter,
      inMemoryLoginParamersRepository,
      restTeamOutputAdapter
    )
  );

  async function handleRouteEvent(event: CustomEvent<RouteEventDetail>) {
    const eventDetail = event.detail;

    if (eventDetail == Logged) {
      await push("/home");
    } else if (eventDetail instanceof ChoozrCreated) {
      await push(`/choozrs/${eventDetail.choozrId.value}`);
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />
