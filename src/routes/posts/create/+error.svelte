<script>
  import { page } from "$app/stores"
</script>

<h1>Yikes there was an error!</h1>

<p>Something went wrong!!!</p>

<pre>
	{$page.error?.message}
</pre>
