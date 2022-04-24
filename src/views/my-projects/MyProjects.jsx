import { useEffect, useState, useRef } from "react"

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
  // const [project, setProject] = useState(PROJECTS[0])
  // const [top, setTop] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const y = window.scrollY;

  //     if (y <= 3100 && top !== 0) setTop(0)
  //     if (y > 3100 && top !== -700) setTop(-700)

  //     // if (y <= 1800 || y >= 3100) return;

  //     const shouldSetProject1 = y > 1800 && y <= 2250 && project.name !== PROJECTS[0].name;
  //     const shouldSetProject2 = y > 2250 && y <= 2650 && project.name !== PROJECTS[1].name;
  //     const shouldSetProject3 = y > 2650 && project.name !== PROJECTS[2].name;

  //     if (shouldSetProject1) setProject(PROJECTS[0]);
  //     if (shouldSetProject2) setProject(PROJECTS[1]);
  //     if (shouldSetProject3) setProject(PROJECTS[2]);
  //     console.log(y)
  //   }

  //   window.addEventListener('scroll', handleScroll);
  // }, [])
  const project = PROJECTS[0]

  return (
    <MyProjectsContainer id="myprojects" style={{top: `${top}px`}}>
      <TitleL>my <TextGradient>projects</TextGradient></TitleL>

      <Project title={project.name} description={project.description} image={project.image} />
    </MyProjectsContainer>
  )
}

export default MyProjects
