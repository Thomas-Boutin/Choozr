<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import ChoozrName from "../domain/ChoozrName";
  import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
  import { RouteEvent, ChoozrCreated } from "./RouteEvent";

  const createChoozrUseCase: CreateChoozrUseCase = getContext(
    "createChoozrUseCase"
  );
  const dispatch = createEventDispatcher();
  let choozrName = "";

  function createChoozr() {
    createChoozrUseCase
      .createChoozrWith(new ChoozrName(choozrName))
      .then((choozr) => dispatch<RouteEvent>("routeEvent", new ChoozrCreated(choozr.id)))
      .catch((err) => console.log(err));
  }
</script>

<main>
  <input bind:value={choozrName} />
  <button disabled={!choozrName} on:click={createChoozr}>Créer</button>
</main>
