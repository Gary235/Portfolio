
import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleM } from "../../styled-components/titles"
import { ProjectBody, ProjectContainer, ProjectImage, ProjectImageWrapper, ProjectInfo } from "./styles"

const Project = (props) =>{
  const {title, description, image, position} = props

  return (
    <ProjectContainer>
      <ProjectInfo toTheLeft={position % 2 === 0}>
        <TitleM><TextGradient>{title}</TextGradient></TitleM>
        <ProjectBody>{description}</ProjectBody>
      </ProjectInfo>

      <ProjectImageWrapper image={image}>
        <ProjectImage src={image} loading="lazy" />
      </ProjectImageWrapper>
    </ProjectContainer>
  )
}

export default Project
