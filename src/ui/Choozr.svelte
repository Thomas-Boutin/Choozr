<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import ChoozrId from "../domain/ChoozrId";
  import TeamName from "../domain/TeamName";
  import type CreateTeamUseCase from "../port/input/CreateTeamUseCase";
  import type { ChoozrScreenParams } from "./ChoozrScreenParams";
  import { RouteEvent, TeamCreated } from "./RouteEvent";
  import QrCode from "svelte-qrcode";
  import type GenerateJoinChoozrURLUseCase from "../port/input/GenerateJoinChoozrURLUseCase";

  export let params: ChoozrScreenParams;
  const choozrId = new ChoozrId(params.choozrId);
  const generateJoinChoozrURLUseCase: GenerateJoinChoozrURLUseCase =
    getContext("generateJoinChoozrURLUseCase");
  const createTeamUseCase: CreateTeamUseCase = getContext("createTeamUseCase");
  const dispatch = createEventDispatcher();
  let teamName = "";
  let joinChoozrURL = "";

  onMount(() => {
    generateJoinChoozrURLUseCase
      .generateJoinChoozrURLWith(choozrId)
      .then((url) => {
        joinChoozrURL = url.value;
      })
      .catch((err) => console.log(err));
  });

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
  <QrCode value={joinChoozrURL} />
</main>
