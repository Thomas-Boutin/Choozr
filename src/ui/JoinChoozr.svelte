<script lang="ts">
  import { getContext, onMount } from "svelte";
  import LoginParameters from "../domain/LoginParameters";
  import MemberName from "../domain/MemberName";
  import type JoinChoozrUseCase from "../port/input/JoinChoozrUseCase";
  import type LoginUseCase from "../port/input/LoginUseCase";
  import type { JoinChoozrScreenParams } from "./JoinChoozrScreenParams";
  import { querystring } from "svelte-spa-router";
  import ChoozrId from "../domain/ChoozrId";

  export let params: JoinChoozrScreenParams;

  const choozrId = new ChoozrId(params.choozrId);
  const loginUseCase: LoginUseCase = getContext("loginUseCase");
  const joinChoozrUseCase: JoinChoozrUseCase = getContext("joinChoozrUseCase");
  let memberName = "";

  onMount(() => {
    const params = new URLSearchParams($querystring);
    loginUseCase.login(
      new LoginParameters(params.get("appId")!, params.get("apiKey")!)
    );
  });

  function joinChoozr() {
    joinChoozrUseCase
      .createMemberWith(choozrId, new MemberName(memberName))
      .then(() => console.log("ok"))
      .catch((err) => console.log(err));
  }
</script>

<main>
  <input bind:value={memberName} />
  <button disabled={!memberName} on:click={joinChoozr}>Rejoindre</button>
</main>
