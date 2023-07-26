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
    id: '001',
    title: 'project 1',
    description: 'aaaaaaaaaaaaaa aa aa a',
    image: image1
  },
  {
    id: '002',
    title: 'project 2',
    description: 'sssssssssssss sss s ',
    image: image2
  },
  {
    id: '003',
    title: 'project 3',
    description: 'vvvvvv vvvvvvvvvvvv cvcv',
    image: image3
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
