import { json } from "@sveltejs/kit"
import db from "$lib/database"

export const GET = async ({ setHeaders, url, route, params }) => {
  const limit = url.searchParams.get("limit") ?? 30
  const order = url.searchParams.get("order") ?? "asc"
  console.log(url)
  const posts = await db.post.findMany({
    orderBy: {
      id: order,
    },
    take: limit,
  })
  setHeaders({ "Cache-Control": "max-age=60" })
  return json(posts)
}
