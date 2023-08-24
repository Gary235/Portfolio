import { Arrow, Buttons, HomeContainer, ImageWrapper, Info, ProfileImage, Scroll, Titles } from "./styles";

import { TitleM, TitleXL } from "../../styled-components/titles";
import { BWButton, MulticolorButton } from "../../styled-components/buttons";
import { BlurredGradient } from "../../styled-components/blurred-gradient";

import TextGradient from "../../components/text-gradient/TextGradient";

import './styles.css'
import profilePhoto from '../../assets/profile.jpg'
import { useEffect } from "react";
import anime from "animejs";

const Home = () => {

  // useEffect(() => {
  //   var objPropLogEl = document.querySelector('.holla');

  //   var myObject = {
  //     prop1: 0,
  //     prop2: '0%'
  //   }

  //   anime({
  //     targets: myObject,
  //     prop1: 50,
  //     prop2: '100%',
  //     easing: 'linear',
  //     round: 1,
  //     update: function() {
  //       objPropLogEl.innerHTML = JSON.stringify(myObject);
  //     }
  //   });
  // })

  const goTo = (id) => document.getElementById(id).scrollIntoView()

  return (
    <HomeContainer id="home">
      <Info>
        <Titles>
          <p className="mono-text">hey there 👋</p>
          <TitleXL >I'm <wbr /> <TextGradient>Gary</TextGradient></TitleXL>
          <TitleM className="home-subtitle">I create web experiences</TitleM>
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
