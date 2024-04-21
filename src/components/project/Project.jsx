import TextGradient from "../../components/text-gradient/TextGradient"
import TechStack from "../tech-stack/TechStack"
import { TitleM } from "../../styled-components/titles"

import { LinkAnchor, LinkImage, LinksContainer, ProjectBody, ProjectContainer, ProjectImage, ProjectImageWrapper, ProjectInfo } from "./styles"

import github from '../../assets/icons/github-icon.svg'
import site from '../../assets/icons/site-icon.svg'
import useDeviceSize from "../../hooks/useDeviceSize"

export const getLinkProps = link => ({
  src: link.includes('github.com') ? github : site,
  alt: `${link.includes('github.com') ? 'repository' : 'website'} link`
})

const Project = ({
  description,
  dialogRef,
  image,
  links,
  position,
  stack,
  title,
  setProjectInDialog
}) => {
  const size = useDeviceSize();

  const renderProjectInfo = () => (
    <ProjectInfo toTheLeft={position % 2 === 0}>
      <TitleM><TextGradient>{title}</TextGradient></TitleM>
      <ProjectBody dangerouslySetInnerHTML={{ __html: description }} />
      <TechStack stack={stack} width={18} />
    </ProjectInfo>
  )

  const renderProjectImage = () => (
    <ProjectImageWrapper image={image}>
      <ProjectImage src={image} loading="lazy" alt={`${title} image`} />
    </ProjectImageWrapper>
  )

  const renderProjectLinks = () => {
    return links.length && (
      <LinksContainer toTheLeft={position % 2 === 0}>
        {links.map(link => (
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
      </LinksContainer>
    )
  }

  return (
    <ProjectContainer onClick={() => {
      if (size.width > 1300) return;
      console.log(size);
      setProjectInDialog({ description, title, image, links, stack })
      document.querySelector('body').classList.add('freeze');
      dialogRef.current?.showModal()
    }}>
      {renderProjectInfo()}
      {renderProjectImage()}
      {renderProjectLinks()}

    </ProjectContainer>
  )
}

export default Project
