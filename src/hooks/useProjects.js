import { useState } from "react"

const PROJECTS = [
  {
    name: 'project 1',
    description: 'aaaaaaaaaaaaaa aa aa a',
    image: ''
  },
  {
    name: 'project 2',
    description: 'sssssssssssss sss s ',
    image: ''
  }, {
    name: 'project 3',
    description: 'vvvvvv vvvvvvvvvvvv cvcv',
    image: ''
  }
]

const useProjects = (initialPoint = 0) => {
  const [project, setProject] = useState(PROJECTS[0])

  const onScroll = () => {
    const y = window.scrollY - initialPoint;

    const shouldSetProject1 = y > 0 && y <= 200 && project.name !== PROJECTS[0].name;
    const shouldSetProject2 = y > 200 && y <= 500 && project.name !== PROJECTS[1].name;
    const shouldSetProject3 = y > 500 && project.name !== PROJECTS[2].name;

    if (shouldSetProject1) setProject(PROJECTS[0]);
    if (shouldSetProject2) setProject(PROJECTS[1]);
    if (shouldSetProject3) setProject(PROJECTS[2]);
  }
  
  window.addEventListener('scroll', onScroll);

  return project;
}

export default useProjects
