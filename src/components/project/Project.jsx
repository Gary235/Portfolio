import TextGradient from "../../components/text-gradient/TextGradient"
import TechStack from "../tech-stack/TechStack"
import { TitleM } from "../../styled-components/titles"

import { LinkAnchor, LinkImage, LinksContainer, ProjectBody, ProjectContainer, ProjectImage, ProjectImageWrapper, ProjectInfo } from "./styles"

import github from '../../assets/icons/github-icon.svg'
import site from '../../assets/icons/site-icon.svg'

const Project = (props) =>{
  const {title, description, image, position, stack, links} = props

  const getLinkProps = link => ({
    src: link.includes('github.com') ? github : site,
    alt: `${link.includes('github.com') ? 'repository' : 'website'} link`
  })

  return (
    <ProjectContainer>
      <ProjectInfo toTheLeft={position % 2 === 0}>
        <TitleM><TextGradient>{title}</TextGradient></TitleM>
        <ProjectBody dangerouslySetInnerHTML={{__html: description}} />
        <TechStack stack={stack} width={18} />
      </ProjectInfo>

      <ProjectImageWrapper image={image}>
        <ProjectImage src={image} loading="lazy" alt={`${title} image`} />
      </ProjectImageWrapper>

      {links.length && (
        <LinksContainer toTheLeft={position % 2 === 0}>
          {links.map(link => (
            <LinkAnchor
              key={link}
              href={link}
              target="_blank"
              aria-label={`link to ${link.includes('github.com') ? 'repository' : 'website'}`}
            >
              <LinkImage {...getLinkProps(link)} />
            </LinkAnchor>
          ))}
        </LinksContainer>
      )}
    </ProjectContainer>
  )
}

export default Project
