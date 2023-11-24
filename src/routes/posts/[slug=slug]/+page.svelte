<script>
  import { page } from "$app/stores"
  export let data

  function formatDate(date) {
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date)
  }
</script>

<hgroup>
  <h1>{data.post.title}</h1>
  <h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>
