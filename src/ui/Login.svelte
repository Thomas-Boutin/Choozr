<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import LoginParameters from "../domain/LoginParameters";
  import type LoginUseCase from "../port/input/LoginUseCase";
  import Loader from "./Loader.svelte";
  import { RouteEvent, Logged } from "./RouteEvent";

  let appId = "";
  let apiKey = "";
  let isLoading = false;
  const dispatch = createEventDispatcher();
  const loginUseCase: LoginUseCase = getContext("loginUseCase");

  function valider() {
    loginUseCase.login(new LoginParameters(appId, apiKey));
    dispatch<RouteEvent>("routeEvent", Logged);
  }
</script>

<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column">
      {#if isLoading}
        <Loader />
      {:else}
        <h1 class="is-size-1 mb-5 has-text-centered">Login</h1>
        <h2>Api Key</h2>
        <input id="api-key" class="mt-1" bind:value={apiKey} type="password" />
        <h2 class="mt-2">App Id</h2>
        <input id="app-id" class="mt-1" bind:value={appId} type="password" />
        <button class="mt-4" disabled={!appId || !apiKey} on:click={valider}
          >Valider</button
        >
      {/if}
    </div>
  </div>
</section>
