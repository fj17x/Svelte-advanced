//api NEWSletter GET and POST
//params are just that [] thing.
export async function GET({ params }) {
  const options = {
    status: 418,
    headders: {
      X: "Hello",
    },
  }
  console.log("params: ", params)

  return new Response("Hello", options)
}

export async function POST({ params, request, cookies }) {
  const data = await request.formData()
  const email = data.get("email")

  console.log("params: ", params)
  console.log(email)

  return new Response(JSON.stringify({ success: true }), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
