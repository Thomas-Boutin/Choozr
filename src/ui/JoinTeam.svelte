<script lang="ts">
  import { getContext } from "svelte";
  import MemberName from "../domain/MemberName";
  import TeamId from "../domain/TeamId";
  import type JoinTeamUseCase from "../port/input/JoinTeamUseCase";
  import type { JoinTeamScreenParams } from "./JoinTeamScreenParams";

  export let params: JoinTeamScreenParams;

  const teamId = new TeamId(params.teamId);
  const joinTeamUseCase: JoinTeamUseCase = getContext("joinTeamUseCase");
  let memberName = "";

  function joinTeam() {
    joinTeamUseCase
      .createMemberWith(teamId, new MemberName(memberName))
      .then(() => console.log("ok"))
      .catch((err) => console.log(err));
  }
</script>

<main>
  <input bind:value={memberName} />
  <button disabled={!memberName} on:click={joinTeam}>Rejoindre</button>
</main>
