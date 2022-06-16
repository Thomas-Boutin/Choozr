<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import LoginParameters from "../domain/LoginParameters";
  import MemberName from "../domain/MemberName";
  import type JoinChoozrUseCase from "../port/input/JoinChoozrUseCase";
  import type LoginUseCase from "../port/input/LoginUseCase";
  import type { JoinChoozrScreenParams } from "./JoinChoozrScreenParams";
  import { querystring } from "svelte-spa-router";
  import ChoozrId from "../domain/ChoozrId";
  import Loader from "./Loader.svelte";
  import { RouteEvent, TeamJoined } from "./RouteEvent";

  export let params: JoinChoozrScreenParams;

  const dispatch = createEventDispatcher();
  const choozrId = new ChoozrId(params.choozrId);
  const loginUseCase: LoginUseCase = getContext("loginUseCase");
  const joinChoozrUseCase: JoinChoozrUseCase = getContext("joinChoozrUseCase");
  let memberName = "";
  let isJoiningTeam = false;

  onMount(() => {
    const params = new URLSearchParams($querystring);
    loginUseCase.login(
      new LoginParameters(params.get("appId")!, params.get("apiKey")!)
    );
  });

  function joinChoozr() {
    isJoiningTeam = true;

    joinChoozrUseCase
      .createMemberWith(choozrId, new MemberName(memberName))
      .then((member) => dispatch<RouteEvent>("routeEvent", new TeamJoined(member.teamId)))
      .catch((err) => console.log(err))
      .finally(() => {
        isJoiningTeam = false;
      });
  }
</script>

<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column">
      <h1 class="is-size-1 has-text-centered mb-5">Rejoindre une équipe</h1>
      <hr />
      {#if isJoiningTeam}
        <div class="is-flex is-justify-content-center">
          <Loader />
        </div>
      {:else}
        <h2>Votre nom</h2>
        <input
          id="app-id"
          class="mt-1"
          bind:value={memberName}
          type="password"
        />
        <button class="mt-4" disabled={!memberName} on:click={joinChoozr}>
          Rejoindre
        </button>
      {/if}
    </div>
  </div>
</section>
