
const getProjectLinks = tech => {
  return {
    codilink: ['https://codi.link/', 'https://github.com/midudev/codi.link/pull/79'],
    flocabulary: ['https://flocabulary.com'],
    unipyme: ['https://unipymelatam.com'],
  }[tech] ?? [];
}

export default getProjectLinks