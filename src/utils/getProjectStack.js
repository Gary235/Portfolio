
const getProjectStack = tech => {
  return {
    codilink: ['html', 'css', 'js'],
    flocabulary: ['react', 'django', 'python'],
    unipyme: ['react', 'typescript'],
  }[tech] ?? [];
}

export default getProjectStack