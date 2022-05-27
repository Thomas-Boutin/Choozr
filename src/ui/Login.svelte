<script lang="ts">
	let appId = '';
	let apiKey = '';
</script>

<main>
	<input bind:value={appId}>
	<input bind:value={apiKey}>
	<button disabled={!appId || !apiKey}>Valider</button>
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
