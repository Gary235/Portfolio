
import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleM } from "../../styled-components/titles"
import { ProjectContainer, ProjectImage, ProjectImageWrapper, ProjectInfo } from "./styles"

const Project = (props) =>{
  const {title, description, image} = props

  return (
    <ProjectContainer>
      <ProjectInfo>
        <TitleM><TextGradient>{title}</TextGradient></TitleM>
        <p style={{color: 'white'}}>{description}</p>
      </ProjectInfo>

      <ProjectImageWrapper image={image}>
        <ProjectImage src={image} loading="lazy" />
      </ProjectImageWrapper>
    </ProjectContainer>
  )
}

export default Project
