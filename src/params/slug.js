//PARAMS folder is for param matching.
//In posts folder i have done slug=slug which checks whether it really is a slug.

export const match = (params) => {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  return slugRegex.test(params)
}
