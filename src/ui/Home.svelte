<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import ChoozrName from "../domain/ChoozrName";
  import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";

  const createChoozrUseCase: CreateChoozrUseCase = getContext(
    "createChoozrUseCase"
  );
  const dispatch = createEventDispatcher();
  let choozrName: string = "";

  function createChoozr() {
    createChoozrUseCase.createChoozrWith(new ChoozrName(choozrName));
    dispatch("routeEvent", { home: "choozrCreated" });
  }
</script>

<main>
  <input bind:value={choozrName} />
  <button disabled={!choozrName} on:click={createChoozr}>Créer</button>
</main>
