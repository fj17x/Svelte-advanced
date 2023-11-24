<!-- <script>
  //FOR GET,POST ETC, MAKE A NEW FOLDER 'API' after routes and MAKE a new file names server.js make the routes in there like GET, POST. To take in data use {params,request, cookies, setHeaders} as parameter. You can then do request.json() or request.formData() respectively. To access cookies use the cookies.get() method (same after doing .formData)

  // import { onDestroy, onMount } from "svelte"
  // import { get } from "svelte/store"

  // onMount(() => console.log("Mounted home page"))
  // onDestroy(() => console.log("Unmounted home page"))

  async function subscribe(event) {
    const form = event.target
    const data = new FormData(form)

    await fetch("/api/newsletter", {
      method: "POST",
      body: data,
    })
  }

  async function getPosts() {
    const response = await fetch("api/posts")
    const posts = await response.json()
    return posts
  }
</script>

<h1>Sign up</h1>

<form on:submit|preventDefault={subscribe}>
  <input type="email" name="email" />
  <button>Subscribe using email</button>
</form>

<h1 class="mt-5">Posts</h1>
{#await getPosts()}
  <p>Loading....</p>
{:then posts}
  <h>Showing {posts.length} posts</h>
  {#each posts as post}
    <div class="post-section">
      {JSON.stringify(post.title)}
    </div>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}

<style>
  .post-section {
    margin-top: 0.5rem;
  }
</style> -->

<script>
  export let data
  $: ({ posts } = data)
</script>

<h1>Posts</h1>

{#each posts as { slug, title }}
  <ul>
    <li>
      <a href="/posts/{slug}">{title}</a>
    </li>
  </ul>
{/each}
