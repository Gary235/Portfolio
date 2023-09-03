import Tilt from 'react-parallax-tilt';

import {
  Arrow,
  Buttons,
  HomeContainer,
  ImageWrapper2,
  Info,
  Number,
  Numbers,
  ProfileImage2,
  Scroll,
  ShadowBorders,
  Sign,
  Titles
} from "./styles";

import { TitleM, TitleXL } from "../../styled-components/titles";
import { BWButton, MulticolorButton } from "../../styled-components/buttons";

import TextGradient from "../../components/text-gradient/TextGradient";
import profilePhoto2 from '../../assets/profile.png'
import sign from '../../assets/sign.png'

import './styles.css'


const Home = () => {
  const goTo = (id) => document.getElementById(id).scrollIntoView()

  const numbers = [
    {val: '400k+', label: 'lines of code'},
    {val: '999+', label: 'bugs fixed'},
    {val: '4', label: 'languages dominated'},
    {val: '~2', label: 'years of experience'},
  ]

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
      <Tilt perspective={500} scale={1.15} style={{position: 'relative'}}>
        <ImageWrapper2>
          <ProfileImage2 alt="profile image" src={profilePhoto2} id="profile-image" loading="eager" />
          <ShadowBorders />
        </ImageWrapper2>
        <Sign src={sign} alt='sign' />
      </Tilt>
      <Numbers>
        {numbers.map((n) => <Number key={n.label}><strong>{n.val}</strong> {n.label}</Number>)}
      </Numbers>
      <Scroll><Arrow /></Scroll>
    </HomeContainer>
  )
}

export default Home
