//page.js is code that runs client side
//page.server.js is code that runs server side.
//page.svelte is the main front end.

//A +page.svelte file can have a sibling +page.js that exports a load function, the return value of which is available to the page via the data prop. THe load function in +page.js runs on both the server and in the browser EXCEPT when combined with export const ssr= false.

import { error } from "@sveltejs/kit"

export const load = async () => {
  //   if (Math.floor(random(5)) > 3)
  //     throw error(404, {
  //       message: "Oops, the random function was unlucky for you!",
  //     })
}
