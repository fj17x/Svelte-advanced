<script>
  import { page } from "$app/stores"
</script>

<h1>There are supposed to be images here.</h1>
<p>The width is: {$page.params.wid}</p>
<p>Page variable is: {JSON.stringify($page)}</p>
