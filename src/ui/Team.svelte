<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import ChoozrName from "../domain/ChoozrName";
import type TeamDetails from "../domain/TeamDetails";
  import TeamId from "../domain/TeamId";
  import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
  import type GetTeamDetailsUseCase from "../port/input/GetTeamDetailsUseCase";
  import { RouteEvent, ChoozrCreated } from "./RouteEvent";
  import type { TeamScreenParams } from "./TeamScreenParams";

  export let params: TeamScreenParams;

  const getTeamDetailsUseCase: GetTeamDetailsUseCase = getContext(
    "getTeamDetailsUseCase"
  );
  let teamDetails: TeamDetails;

  onMount(() => {
    getTeamDetails();
  });

  function getTeamDetails() {
    getTeamDetailsUseCase
      .getTeamDetailsBy(new TeamId(params.teamId))
      .then((response: TeamDetails) => {
        teamDetails = response;
      }).catch((err) => console.log(err));
  }
</script>

<main />
