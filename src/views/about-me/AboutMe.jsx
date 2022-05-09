import psh from '../../assets/psh.png'
import utn from '../../assets/utn.png'

import TextGradient from '../../components/text-gradient/TextGradient'
import { BlurredGradient } from '../../styled-components/blurred-gradient'
import { TitleL } from "../../styled-components/titles"

import { AboutMeContainer, Description, ImagesGrid, PshImage, Text, UtnImage} from "./styles"

const AboutMe = () => {

  return (
    <AboutMeContainer id="aboutme">
      <TitleL>about <TextGradient>me</TextGradient></TitleL>
      <Description>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At congue lectus egestas etiam eget enim sed elementum tincidunt.
          Pellentesque ac neque et lacus, scelerisque. Quam ultricies arcu sed semper et. Mi purus morbi pellentesque proin ac et, a id nunc.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At congue lectus egestas etiam eget enim sed elementum tincidunt.
          Pellentesque ac neque et lacus, scelerisque. Quam ultricies arcu sed semper et. Mi purus morbi pellentesque proin ac et, a id nunc.
        </Text>
        <ImagesGrid>
          <PshImage src={psh} loading="lazy" />
          <UtnImage src={utn} loading="lazy" />
        </ImagesGrid>
      </Description>
    </AboutMeContainer>
  )
}

export default AboutMe
