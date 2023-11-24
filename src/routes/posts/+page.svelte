<script>
  import { onDestroy, onMount } from "svelte"

  onMount(() => console.log("Mounted home page"))
  onDestroy(() => console.log("Unmounted home page"))
</script>

<h1>Posts page</h1>

<p>You can <a href="/posts/create">create</a> or edit your posts here.</p>
