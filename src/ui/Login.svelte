<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import LoginParameters from "../domain/LoginParameters";
  import type LoginUseCase from "../port/input/LoginUseCase";
  import { RouteEvent, Logged } from "./RouteEvent";

  let appId = "";
  let apiKey = "";
  const dispatch = createEventDispatcher();
  const loginUseCase: LoginUseCase = getContext("loginUseCase");

  function valider() {
    loginUseCase.login(new LoginParameters(appId, apiKey));
    dispatch<RouteEvent>("routeEvent", Logged);
  }
</script>

<main>
  <input bind:value={apiKey} />
  <input bind:value={appId} />
  <button disabled={!appId || !apiKey} on:click={valider}>Valider</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
