<script>
  // import { onDestroy, onMount } from "svelte"

  // onMount(() => console.log("Mounted home page"))
  // onDestroy(() => console.log("Unmounted home page"))
  export let data
  $: ({ posts } = data)
</script>

<h1>Posts page</h1>

<p>You can <a href="/posts/create">create</a> or edit your posts here.</p>

<h1>{posts.length} Posts</h1>

{#each posts as { slug, title }}
  <ul>
    <li>
      <a href="/posts/{slug}">{title}</a>
    </li>
  </ul>
{/each}
