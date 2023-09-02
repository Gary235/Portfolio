
const getTechVerbose = tech => {
  return {
    c: 'C',
    django: 'Django',
    react: 'React',
    python: 'Python',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    css: 'CSS',
    netlify: 'Netlify',
    html: 'HTML',
    shell: 'Shell',
    mantine: 'Mantine',
    git: 'Git'
  }[tech] ?? '';
}

export default getTechVerbose