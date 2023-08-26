import TextGradient from '../../components/text-gradient/TextGradient'
import { TitleL } from "../../styled-components/titles"

import psh from '../../assets/psh.png'
import utn from '../../assets/utn.png'

import {
  AboutMeContainer,
  Description,
  ImagesGrid,
  PshImage,
  Presentation,
  UtnImage,
  DescriptionData,
  IconsTitle
} from "./styles"
import TechStack from '../../components/tech-stack/TechStack'
import './styles.css'

const AboutMe = () => {

  return (
    <AboutMeContainer id="aboutme">
      <TitleL className='about-me-title'>about <TextGradient>me</TextGradient></TitleL>
      <Description>
        <DescriptionData>
          <Presentation>
            Hello! I'm Gary, an enthusiast of technology and programming.{' '}
            I am studying Software Engineering at the National Technological University (<a href='https://utn.edu.ar/' target='_blank' className='link'>UTN</a>),{' '}
            where I am expanding my knowledge in the world of computer science.{' '}
            Additionally, I am honing my skills as a Web Developer at <a href='https://wearepsh.com/' target='_blank' className='link'>PSH</a>,{' '}
            applying my creativity and passion for coding.
          </Presentation>
          <IconsTitle>Some tech I'm used to:</IconsTitle>
          <TechStack stack={['react', 'python', 'django', 'c']} />
        </DescriptionData>
        {/* <ImagesGrid>
          <PshImage src={psh} loading="lazy" />
          <UtnImage src={utn} loading="lazy" />
        </ImagesGrid> */}
      </Description>
    </AboutMeContainer>
  )
}

export default AboutMe