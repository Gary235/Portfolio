import { useRef, useEffect } from "react"
import useProjects from "../../hooks/useProjects"

import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleL } from "../../styled-components/titles"

import { MyProjectsContainer } from "./styles"

const MyProjects = () => {
  const project = useProjects()
  const containerRef = useRef(null)

  const options = {
    root: null,
    threshold: 1.0
  }

  const callback = (entries) => {
    const [ entry ] = entries;
    console.log(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    containerRef.current && observer.observe(containerRef.current);

    return () => containerRef.current && observer.unobserve(containerRef.current)
  }, [containerRef, options])

  return (
    <MyProjectsContainer id="myprojects" ref={containerRef}>
      <TitleL>my <TextGradient>projects</TextGradient></TitleL>
      <p style={{color: 'white'}}>{project?.name}</p>
    </MyProjectsContainer>
  )
}

export default MyProjects
