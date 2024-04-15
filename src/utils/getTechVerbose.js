
const getTechVerbose = tech => {
  return {
    bun: 'Bun',
    c: 'C',
    codilink: 'I had the opportunity to contribute to an open-source project by an influencer I greatly admire. It was <strong>my very first contribution</strong> to an open-source initiative, and it was an incredible learning experience. <br/><br/>Being part of this project allowed me to collaborate with <i>like-minded individuals</i> and give back to a community that has inspired me.',
    css: 'CSS',
    django: 'Django',
    flocabulary: "I'm <i>currently working on this project</i>, with a whole team, where I'm honing my skills as a developer. <br/><br/> I Helped build a whole lot of different features such as <strong>co-teaching, subscription tiers, video manipulation using Amazon Elastic Transcoder</strong>, among others.",
    git: 'Git',
    html: 'HTML',
    javascript: 'JavaScript',
    mantine: 'Mantine',
    netlify: 'Netlify',
    python: 'Python',
    react: 'React',
    shell: 'Shell',
    tailwind: 'Tailwind CSS',
    typescript: 'TypeScript',
    unipyme: 'This was the first project I was in, I dipped my toes into web development, <i>learning the basics of React</i> and the world of web development. <br/><br/>It was an <strong>invaluable experience</strong> that teached me how to work together in a team.',
    vercel: 'Vercel',
  }[tech] ?? '';
}

export default getTechVerbose