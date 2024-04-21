import { useEffect, useRef, useState } from "react"
import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleL } from "../../styled-components/titles"
import Project, { getLinkProps } from "../../components/project/Project"
import TechStack from "../../components/tech-stack/TechStack"

import { MyProjectsContainer, ProjectModal } from "./styles"

import umlcollab from '../../assets/projects/umlcollab.jpg'
import tuki from '../../assets/projects/tuki.jpg'
import watchlog from '../../assets/projects/watchlog.jpg'
import realtimetranslator from '../../assets/projects/rtt.jpg'
import betteryoutube from '../../assets/projects/betteryoutube.jpg'
import calculator from '../../assets/projects/calculator.jpg'
import { LinkAnchor, LinkImage } from "../../components/project/styles"

const PROJECTS = [
  {
    title: 'UMLCollab',
    description: 'UMLCollab is an innovative tool that enhances UML diagramming with <strong>real-time collaborative features</strong>. With support for various diagram types and robust access controls, it is ideal for developers, project managers, and teams seeking a powerful solution for their diagramming needs. <br/><br/> Empower Your Team\'s Creativity - Diagram Together with UMLCollab!',
    image: umlcollab,
    stack: ['typescript', 'react', 'bun', 'tailwind', 'vercel'],
    links: ['https://github.com/Gary235/uml-collab', 'https://uml-collab-app.vercel.app/']
  },
  {
    title: 'T.U.K.I.',
    description: 'This project is about an imitation of how a real <strong>Operating System</strong> works, consisting of 5 modules (Kernel - Memory - FileSystem - CPU - Console). It can perform instructions such as <i>CREATE_SEGMENT, F_READ, MOV_IN,</i> among others. <br/><br/> It features a memory segmentation system and a UFS (EXT2) type for the filesystem.',
    image: tuki,
    stack: ['c', 'shell'],
    links: ['https://github.com/Gary235/tuki']
  },
  {
    title: 'WatchLog',
    description: "A personalized watchlist and show tracker. Seamlessly manage the shows you're currently watching with ease. Keep tabs on your favorite series, never missing a beat. <br/><br/> <strong>Stay organized, stay entertained.</strong>",
    image: watchlog,
    stack: ['react', 'mantine', 'netlify'],
    links: ['https://github.com/Gary235/watch-log', 'https://watch-log.netlify.app/']
  },
  {
    title: 'Real Time Translator',
    description: "The Real Time Translator is a personal project that offers <strong>instant text translation</strong> across multiple languages in real time. Whether you're bridging language gaps or exploring foreign content, this project has you covered. <br/><br/> It uses <i>OpenCv, Pytesseract and Tkinter.</i>",
    image: realtimetranslator,
    stack: ['python'],
    links: ['https://github.com/Gary235/real-time-translator']
  },
  {
    title: 'Better Youtube',
    description: 'A <strong>YouTube clone</strong> that brings the familiar experience you love. Dive into a world of videos, creators, and endless entertainment. Discover, watch, and engage just like you would on the original platform. <br/><br/> Welcome to a familiar yet exciting new space.',
    image: betteryoutube,
    stack: ['react', 'typescript', 'netlify'],
    links: ['https://github.com/Gary235/Better-Youtube', 'https://betteryoutube.netlify.app/']
  },
  {
    title: 'Calculator',
    description: 'Experience effortless number crunching and mathematical convenience at your fingertips. Simplify complex calculations and enjoy a <strong>user-friendly interface</strong> that makes math a breeze. <br/><br/> Elevate your computation game with our powerful yet intuitive calculator solution.',
    image: calculator,
    stack: ['html', 'css', 'javascript'],
    links: ['https://github.com/Gary235/Simple-Calculator', 'https://gary235.github.io/Simple-Calculator/']
  }
]

const MyProjects = () => {
  const dialogRef = useRef(null);
  const [projectInDialog, setProjectInDialog] = useState({});

  useEffect(() => {
    const onOutsideDialogClick = (e) => {
      const rect = dialogRef.current.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );

      if (!isInDialog) {
        dialogRef.current.close();
        document.querySelector('body').classList.remove('freeze')
      }
    }

    dialogRef.current.addEventListener('click', onOutsideDialogClick);
    return () => dialogRef.current.removeEventListener('click', onOutsideDialogClick)
  }, [])

  const renderProjects = projects => projects.map(
    (project, position) => (
      <Project
        key={`project-${position}`}
        dialogRef={dialogRef}
        position={position}
        setProjectInDialog={setProjectInDialog}
        {...project}
      />
    )
  )

  return (
    <MyProjectsContainer id="myprojects">
      <TitleL>my <TextGradient>projects</TextGradient></TitleL>

      {renderProjects(PROJECTS)}

      <ProjectModal ref={dialogRef}>
        <img src={projectInDialog.image} />
        <div className="modal-body">
          <span className="title">
            <h3><TextGradient>{projectInDialog.title}</TextGradient></h3>
            <TechStack stack={projectInDialog.stack} width={18} />
          </span>
          <div dangerouslySetInnerHTML={{ __html: projectInDialog.description }} />
          <span className="links">
            {projectInDialog.links?.map(link => (
              <LinkAnchor
                key={link}
                href={link}
                target="_blank"
                aria-label={`link to ${link.includes('github.com') ? 'repository' : 'website'}`}
                title={`go to ${link.includes('github.com') ? 'repository' : 'website'}`}
              >
                <LinkImage {...getLinkProps(link)} />
              </LinkAnchor>
            ))}
          </span>
        </div>
      </ProjectModal>
    </MyProjectsContainer>
  )
}

export default MyProjects
