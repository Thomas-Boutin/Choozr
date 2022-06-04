<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import ChoozrId from "../domain/ChoozrId";
  import TeamName from "../domain/TeamName";
  import type CreateTeamUseCase from "../port/input/CreateTeamUseCase";
  import type { ChoozrScreenParams } from "./ChoozrScreenParams";
  import { RouteEvent, TeamCreated } from "./RouteEvent";

  export let params: ChoozrScreenParams;
  const choozrId = new ChoozrId(params.choozrId);

  const createTeamUseCase: CreateTeamUseCase = getContext("createTeamUseCase");
  const dispatch = createEventDispatcher();
  let teamName = "";

  function createTeam() {
    createTeamUseCase
      .createTeamWith(choozrId, new TeamName(teamName))
      .then((team) =>
        dispatch<RouteEvent>("routeEvent", new TeamCreated(team.id))
      )
      .catch((err) => console.log(err));
  }
</script>

<main>
  <input bind:value={teamName} />
  <button disabled={!teamName} on:click={createTeam}>Créer</button>
</main>
