<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import ChoozrId from "../domain/ChoozrId";
  import TeamName from "../domain/TeamName";
  import type CreateTeamUseCase from "../port/input/CreateTeamUseCase";
  import type { ChoozrScreenParams } from "./ChoozrScreenParams";
  import { RouteEvent, TeamCreated } from "./RouteEvent";
  import QrCode from "svelte-qrcode";
  import type GenerateJoinChoozrURLUseCase from "../port/input/GenerateJoinChoozrURLUseCase";
  import Loader from "./Loader.svelte";
  import type Team from "../domain/Team";
  import type TeamId from "../domain/TeamId";

  export let params: ChoozrScreenParams;
  const choozrId = new ChoozrId(params.choozrId);
  const generateJoinChoozrURLUseCase: GenerateJoinChoozrURLUseCase = getContext(
    "generateJoinChoozrURLUseCase"
  );
  const createTeamUseCase: CreateTeamUseCase = getContext("createTeamUseCase");
  const dispatch = createEventDispatcher();
  let teamName = "";
  let joinChoozrURL = "";
  let isLoadingTeams = true;
  let teams: Team[] = [];

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

  function onTeamClicked(id: TeamId) {}
</script>

<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column">
      <h1 class="is-size-1 has-text-centered mb-5">Choozr</h1>
      <QrCode value={joinChoozrURL} />
      <hr />
      {#if isLoadingTeams}
        <div class="is-flex is-justify-content-center">
          <Loader />
        </div>
      {:else}
        <table class="table is-striped is-hoverable">
          <thead>
            <tr><th>Choozrs</th></tr>
          </thead>
          <tbody>
            {#each teams as { id, name }}
              <tr on:click={() => onTeamClicked(id)}>
                <td class="is-clickable">{name.value}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
      <hr />
      <h2>Nouvelle Équipe</h2>
      <input id="app-id" class="mt-1" bind:value={teamName} type="password" />
      <button class="mt-4" disabled={!teamName} on:click={createTeam}>
        Créer
      </button>
    </div>
  </div>
</section>
