import TextGradient from "../../components/text-gradient/TextGradient"
import TechStack from "../tech-stack/TechStack"
import { TitleM } from "../../styled-components/titles"

import { ProjectBody, ProjectContainer, ProjectImage, ProjectImageWrapper, ProjectInfo } from "./styles"

const Project = (props) =>{
  const {title, description, image, position, stack} = props

  return (
    <ProjectContainer>
      <ProjectInfo toTheLeft={position % 2 === 0}>
        <TitleM><TextGradient>{title}</TextGradient></TitleM>
        <ProjectBody dangerouslySetInnerHTML={{__html: description}} />

        <TechStack stack={stack} width={18} />
      </ProjectInfo>

      <ProjectImageWrapper image={image}>
        <ProjectImage src={image} loading="lazy" />
      </ProjectImageWrapper>
    </ProjectContainer>
  )
}

export default Project
