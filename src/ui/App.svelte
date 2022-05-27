<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Login from "./Login.svelte";
  import Test from "./Test.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="about" component={Test} />
  <Route path="/"><Login /></Route>
</Router>
