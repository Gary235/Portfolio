import { useEffect, useState } from "react"

import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleL } from "../../styled-components/titles"

import { MyProjectsContainer } from "./styles"
import Project from "../../components/project/Project"

import image1 from '../../assets/aaaa.avif'
import image2 from '../../assets/bbbb.jpg'
import image3 from '../../assets/cccc.jpg'

const PROJECTS = [
  {
    name: 'project 1',
    description: 'aaaaaaaaaaaaaa aa aa a',
    image: image1
  },
  {
    name: 'project 2',
    description: 'sssssssssssss sss s ',
    image: image2
  }, {
    name: 'project 3',
    description: 'vvvvvv vvvvvvvvvvvv cvcv',
    image: image3
  }
]

const MyProjects = () => {
  const [project, setProject] = useState(PROJECTS[0])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const shouldSetProject1 = y > 1800 && y <= 2250;
      const shouldSetProject2 = y > 2250 && y <= 2650;
      const shouldSetProject3 = y > 2650;
  
      if (shouldSetProject1) setProject(PROJECTS[0]);
      if (shouldSetProject2) setProject(PROJECTS[1]);
      if (shouldSetProject3) setProject(PROJECTS[2]);
    }

    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <MyProjectsContainer id="myprojects">
      <TitleL>my <TextGradient>projects</TextGradient></TitleL>

      <Project title={project.name} description={project.description} image={project.image} />
    </MyProjectsContainer>
  )
}

export default MyProjects
