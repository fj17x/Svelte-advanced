<script>
  export let data
</script>

<div class="posts">
  <aside>
    <h4>Posts</h4>

    <nav>
      <ul>
        <li><a href="/posts/one">One</a></li>
        <li><a href="/posts/two">Two</a></li>
      </ul>
    </nav>
  </aside>
  <main>
    <slot />
  </main>
</div>


<style>
  .posts {
    display: grid;
    gap: 2rem;
    grid-template-columns: 0.3fr auto;
    margin-top: 2rem;
  }
</style>
