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
    stack: ['c', 'shell'],
    links: ['https://github.com/Gary235/tuki']
  },
  {
    id: '002',
    title: 'WatchLog',
    description: "A personalized watchlist and show tracker. Seamlessly manage the shows you're currently watching with ease. Keep tabs on your favorite series, never missing a beat. <br/><br/> <strong>Stay organized, stay entertained.</strong>",
    image: image2,
    stack: ['react', 'mantine', 'netlify'],
    links: ['https://github.com/Gary235/watch-log', 'https://watch-log.netlify.app/']
  },
  /**
  {
    id: '0021',
    title: 'Real Time Translator',
    description: "",
    image: image2,
    stack: ['python', ],
    links: []
  },
  */
  {
    id: '003',
    title: 'Better Youtube',
    description: 'A <strong>YouTube clone</strong> that brings the familiar experience you love. Dive into a world of videos, creators, and endless entertainment. Discover, watch, and engage just like you would on the original platform. <br/><br/> Welcome to a familiar yet exciting new space.',
    image: image3,
    stack: ['react', 'typescript', 'netlify'],
    links: ['https://github.com/Gary235/Better-Youtube', 'https://betteryoutube.netlify.app/']
  },
  {
    id: '004',
    title: 'Calculator',
    description: 'Experience effortless number crunching and mathematical convenience at your fingertips. Simplify complex calculations and enjoy a <strong>user-friendly interface</strong> that makes math a breeze. <br/><br/> Elevate your computation game with our powerful yet intuitive calculator solution.',
    image: image4,
    stack: ['html', 'css', 'javascript'],
    links: ['https://github.com/Gary235/Simple-Calculator', 'https://gary235.github.io/Simple-Calculator/']
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
