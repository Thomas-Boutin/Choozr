<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type TeamDetails from "../domain/TeamDetails";
  import TeamId from "../domain/TeamId";
  import type GetTeamDetailsUseCase from "../port/input/GetTeamDetailsUseCase";
  import Loader from "./Loader.svelte";
  import type { TeamScreenParams } from "./TeamScreenParams";

  export let params: TeamScreenParams;

  const getTeamDetailsUseCase: GetTeamDetailsUseCase = getContext(
    "getTeamDetailsUseCase"
  );
  let teamDetails: TeamDetails;
  let isLoadingDetails = true;

  onMount(() => {
    getTeamDetails();
  });

  function getTeamDetails() {
    getTeamDetailsUseCase
      .getTeamDetailsBy(new TeamId(params.teamId))
      .then((response: TeamDetails) => {
        teamDetails = response;
      })
      .catch((err) => console.log(err))
      .finally(() => { isLoadingDetails = false; });
  }
</script>

<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column">
      {#if isLoadingDetails}
        <div class="is-flex is-justify-content-center">
          <Loader />
        </div>
      {:else}
        <h1 class="is-size-1 has-text-centered mb-5">Équipe {teamDetails.name.value}</h1>
        <hr />
        <table class="table is-striped is-hoverable">
          <thead>
            <tr><th>Choozrs</th></tr>
          </thead>
          <tbody>
            {#each teamDetails.membersNames as memberName}
              <tr>
                <td class="is-clickable">{memberName.value}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
  </div>
</section>
