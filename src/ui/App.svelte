<script lang="ts">
  import { setContext } from "svelte";
  import Router, { push } from "svelte-spa-router";
  import InMemoryLoginParametersRepository from "../adapter/output/InMemoryLoginParametersOutputAdapter";
  import AuthenticationService from "../port/AuthenticationService";
  import Login from "./Login.svelte";
  import Home from "./Home.svelte";
  import {
    ChoozrClicked,
    ChoozrCreated,
    Logged,
    RouteEventDetail,
    TeamClicked,
    TeamJoined,
  } from "./RouteEvent";
  import ChoozrService from "../port/ChoozrService";
  import RESTChoozrOutputAdapter from "../adapter/output/RESTChoozrOutputAdapter";
  import TeamService from "../port/TeamService";
  import RESTTeamOutputAdapter from "../adapter/output/RESTTeamOutputAdapter";
  import Choozr from "./Choozr.svelte";
  import MemberService from "../port/MemberService";
  import RESTMemberOutputAdapter from "../adapter/output/RESTMemberOutputAdapter";
  import JoinChoozr from "./JoinChoozr.svelte";
  import Team from "./Team.svelte";
  import FirebaseChoozrOutputAdapter from "../adapter/output/FirebaseChoozrOutputAdapter";

  const routes = {
    "/": Login,
    "/home": Home,
    "/choozrs/:choozrId": Choozr,
    "/choozrs/:choozrId/join": JoinChoozr,
    "/teams/:teamId": Team,
  };
  initializeFirebaseContext();

  function initializeAirtableContext() {
    const inMemoryLoginParamersRepository =
      new InMemoryLoginParametersRepository();
    const restChoozrOutputAdapter = new RESTChoozrOutputAdapter();
    const restTeamOutputAdapter = new RESTTeamOutputAdapter();
    const restMemberOutputAdapter = new RESTMemberOutputAdapter();
    const choozrService = new ChoozrService(
      restChoozrOutputAdapter,
      inMemoryLoginParamersRepository,
      restChoozrOutputAdapter,
      restTeamOutputAdapter
    );
    const teamService = new TeamService(
      restTeamOutputAdapter,
      inMemoryLoginParamersRepository,
      restTeamOutputAdapter
    );

    setContext(
      "loginUseCase",
      new AuthenticationService(inMemoryLoginParamersRepository)
    );
    setContext("createChoozrUseCase", choozrService);
    setContext("getChoozrsUseCase", choozrService);
    setContext("generateJoinChoozrURLUseCase", choozrService);
    setContext("getChoozrTeamsUseCase", choozrService);
    setContext("getTeamDetailsUseCase", teamService);
    setContext("createTeamUseCase", teamService);
    setContext(
      "joinChoozrUseCase",
      new MemberService(
        restMemberOutputAdapter,
        inMemoryLoginParamersRepository,
        restTeamOutputAdapter
      )
    );
  }

  function initializeFirebaseContext() {
    const inMemoryLoginParamersRepository =
      new InMemoryLoginParametersRepository();
    const firebaseChoozrOutputAdapter = new FirebaseChoozrOutputAdapter();
    const restTeamOutputAdapter = new RESTTeamOutputAdapter();
    const restMemberOutputAdapter = new RESTMemberOutputAdapter();
    const choozrService = new ChoozrService(
      firebaseChoozrOutputAdapter,
      inMemoryLoginParamersRepository,
      firebaseChoozrOutputAdapter,
      restTeamOutputAdapter
    );
    const teamService = new TeamService(
      restTeamOutputAdapter,
      inMemoryLoginParamersRepository,
      restTeamOutputAdapter
    );

    setContext(
      "loginUseCase",
      new AuthenticationService(inMemoryLoginParamersRepository)
    );
    setContext("createChoozrUseCase", choozrService);
    setContext("getChoozrsUseCase", choozrService);
    setContext("generateJoinChoozrURLUseCase", choozrService);
    setContext("getChoozrTeamsUseCase", choozrService);
    setContext("getTeamDetailsUseCase", teamService);
    setContext("createTeamUseCase", teamService);
    setContext(
      "joinChoozrUseCase",
      new MemberService(
        restMemberOutputAdapter,
        inMemoryLoginParamersRepository,
        restTeamOutputAdapter
      )
    );
  }

  async function handleRouteEvent(event: CustomEvent<RouteEventDetail>) {
    const eventDetail = event.detail;

    if (eventDetail == Logged) {
      await push("/home");
    } else if (eventDetail instanceof ChoozrCreated) {
      await push(`/choozrs/${eventDetail.choozrId.value}`);
    } else if (eventDetail instanceof ChoozrClicked) {
      await push(`/choozrs/${eventDetail.choozrId.value}`);
    } else if (eventDetail instanceof TeamJoined) {
      await push(`/teams/${eventDetail.teamId.value}`);
    } else if (eventDetail instanceof TeamClicked) {
      await push(`/teams/${eventDetail.teamId.value}`);
    }
  }
</script>

<Router {routes} on:routeEvent={handleRouteEvent} />

<style lang="scss" global>
  @import "app.scss";
</style>
