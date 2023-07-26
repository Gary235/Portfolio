import { Arrow, Buttons, HomeContainer, ImageWrapper, Info, ProfileImage, Scroll, Titles } from "./styles";

import { TitleM, TitleXL } from "../../styled-components/titles";
import { BWButton, MulticolorButton } from "../../styled-components/buttons";
import { BlurredGradient } from "../../styled-components/blurred-gradient";

import TextGradient from "../../components/text-gradient/TextGradient";

import profilePhoto from '../../assets/profile.jpg'

const Home = () => {

  const goTo = (id) => document.getElementById(id).scrollIntoView()

  return (
    <HomeContainer id="home">
      <Info>
        <Titles>
          <p style={{color: '#ccc73b', fontFamily:'monospace', marginBottom: '0.75rem', fontSize: '0.85rem'}}>hey there 👋</p>
          <TitleXL>I'm <wbr /> <TextGradient>Gary</TextGradient></TitleXL>
          <TitleM style={{marginTop: '0.5rem'}}>I create web experiences</TitleM>
        </Titles>
        <Buttons>
          <MulticolorButton onClick={() => goTo("myprojects") }>see my projects</MulticolorButton>
          <BWButton onClick={() => goTo("contact") }>contact me</BWButton>
        </Buttons>
      </Info>
      <ImageWrapper> <ProfileImage src={profilePhoto} id="profile-image" loading="lazy" /></ImageWrapper>
      {/* <BlurredGradient /> */}
      <Scroll><Arrow /></Scroll>
    </HomeContainer>
  )
}

export default Home
