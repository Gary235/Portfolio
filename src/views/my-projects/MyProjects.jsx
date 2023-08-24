import { useEffect, useState, useRef } from "react"

import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleL } from "../../styled-components/titles"

import { MyProjectsContainer } from "./styles"
import Project from "../../components/project/Project"

import image1 from '../../assets/project-1.jpg'
import image2 from '../../assets/project-2.jpg'
import image3 from '../../assets/project-3.jpg'
import image4 from '../../assets/project-4.jpg'

const PROJECTS = [
  {
    id: '001',
    title: 'T.U.K.I.',
    description: 'This project is about an imitation of how a real <strong>Operating System</strong> works, consisting of 5 modules (Kernel - Memory - FileSystem - CPU - Console). It can perform instructions such as <i>CREATE_SEGMENT, F_READ, MOV_IN,</i> among others. <br/><br/> It features a memory segmentation system and a UFS (EXT2) type for the filesystem.',
    image: image1,
    stack: ['c', 'shell']
  },
  {
    id: '002',
    title: 'WatchLog',
    description: 'sssssssssssss sss s ',
    image: image2,
    stack: ['react', 'typescript', 'netlify']
  },
  {
    id: '003',
    title: 'Better Youtube',
    description: 'sssssssssssss sss s ',
    image: image3,
    stack: ['react', 'typescript', 'netlify']
  },
  {
    id: '004',
    title: 'Calculator',
    description: 'vvvvvv vvvvvvvvvvvv cvcv',
    image: image4,
    stack: ['html', 'css', 'javascript']
  }
]

const MyProjects = () => {

  const renderProjects = projects =>  projects.map(
    (project, position) => <Project key={project.id} {...project} position={position} />
  )

  return (
    <MyProjectsContainer id="myprojects">
      <TitleL>my <TextGradient>projects</TextGradient></TitleL>

      {renderProjects(PROJECTS)}
    </MyProjectsContainer>
  )
}

export default MyProjects
