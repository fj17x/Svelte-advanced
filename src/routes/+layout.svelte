<script>
  import "../app.css"
  export let data
  import { page } from "$app/stores"
</script>

<svelte:head>
  <title>{$page.data.post?.title ?? "Dynamic via svelte:head"}</title>
</svelte:head>

<nav class="navbar navbar-default">
  <ul class="navbar-nav">
    <li class="nav-item"><a href="/">Home</a></li>
    <li class="nav-item"><a href="/posts">Posts</a></li>
  </ul>
</nav>

<slot />
<br />

<footer>
  <p>This is from layout.js:&nbsp;{data.messageFromLayoutJS}</p>
</footer>
