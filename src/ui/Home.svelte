<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import type Choozr from "../domain/Choozr";
  import type ChoozrId from "../domain/ChoozrId";
  import ChoozrName from "../domain/ChoozrName";
  import type CreateChoozrUseCase from "../port/input/CreateChoozrUseCase";
  import type GetChoozrsUseCase from "../port/input/GetChoozrsUseCase";
  import Loader from "./Loader.svelte";
  import { RouteEvent, ChoozrCreated, ChoozrClicked } from "./RouteEvent";

  const getChoozrsUseCase: GetChoozrsUseCase = getContext("getChoozrsUseCase");
  const createChoozrUseCase: CreateChoozrUseCase = getContext(
    "createChoozrUseCase"
  );
  const dispatch = createEventDispatcher();
  let choozrName = "";
  let choozrs: Choozr[] = [];
  let isLoadingChoozrs = true;

  onMount(() => {
    getChoozrsUseCase
      .getChoozrs()
      .then((response) => {
        choozrs = response;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        isLoadingChoozrs = false;
      });
  });

  function onChoozrClicked(choozrId: ChoozrId) {
    dispatch<RouteEvent>("routeEvent", new ChoozrClicked(choozrId));
  }

  function createChoozr() {
    createChoozrUseCase
      .createChoozrWith(new ChoozrName(choozrName))
      .then((choozr) =>
        dispatch<RouteEvent>("routeEvent", new ChoozrCreated(choozr.id))
      )
      .catch((err) => console.log(err));
  }
</script>

<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
    <div class="is-flex is-flex-direction-column">
      <h1 class="is-size-1 has-text-centered mb-5">Home</h1>
      {#if isLoadingChoozrs}
        <div class="is-flex is-justify-content-center">
          <Loader />
        </div>
      {:else}
        <table class="table is-striped is-hoverable">
          <thead>
            <tr><th>Choozrs</th></tr>
          </thead>
          <tbody>
            {#each choozrs as { id, name }}
              <tr class="is-clickable" on:click={() => onChoozrClicked(id)}>
                <td>{name.value}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
      <hr />
      <h2>Nouveau Choozr</h2>
      <input id="app-id" class="mt-1" bind:value={choozrName} />
      <button class="mt-4" disabled={!choozrName} on:click={createChoozr}>
        Créer
      </button>
    </div>
  </div>
</section>
