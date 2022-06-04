<script lang="ts">
  import { getContext, onMount } from "svelte";
  import LoginParameters from "../domain/LoginParameters";
  import MemberName from "../domain/MemberName";
  import TeamId from "../domain/TeamId";
  import type JoinTeamUseCase from "../port/input/JoinTeamUseCase";
  import type LoginUseCase from "../port/input/LoginUseCase";
  import type { JoinTeamScreenParams } from "./JoinTeamScreenParams";
  import { querystring } from "svelte-spa-router";

  export let params: JoinTeamScreenParams;

  const teamId = new TeamId(params.teamId);
  const loginUseCase: LoginUseCase = getContext("loginUseCase");
  const joinTeamUseCase: JoinTeamUseCase = getContext("joinTeamUseCase");
  let memberName = "";

  onMount(() => {
    const params = new URLSearchParams($querystring);
    loginUseCase.login(new LoginParameters(params.get("appId")!, params.get("apiKey")!));
  });

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
