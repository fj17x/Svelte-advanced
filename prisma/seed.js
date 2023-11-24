import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts")
  console.log("response: ", response)

  const { posts } = await response.json()
  console.log("posts: ", posts)

  return posts
}

function slugify(text) {
  return text
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase()
}

async function main() {
  const posts = await getPosts()

  for (const post of posts) {
    await db.post.create({
      data: {
        title: post.title,
        content: post.body,
        slug: slugify(post.title),
      },
    })
  }
}
console.log("This is seed")
main()
