import styled from 'styled-components'
import ArrowSVG from '../../components/svgs/Arrow';

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1350px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 1350px) {
    gap: 2rem;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1350px) {
    align-items: center;
  }
`;

export const ImageWrapper = styled.figure`
  position: relative;
  width: 20rem;
  height: 20rem;

  &::before {
    content: '';
    z-index: -1;
    width: 115%;
    height: 115%;
    border-radius: 100%;

    background: linear-gradient(125deg, #FF71AB 20%, #FF5DAD00, #FFF0A000, #FFE1A2 80%);
    background-repeat: no-repeat;
    opacity: 0.15;

    position: absolute;
    left: 50%;
    top: 50%;

    margin-top: calc(-10rem - 7.5%);
    margin-left: calc(-10rem - 7.5%);

    animation: rotate cubic-bezier(.43,.71,.76,.94) 10s infinite;
  }

  @media screen and (max-width: 1350px) {
    width: 12rem;
    height: 12rem;

    &::before {
      margin-top: calc(-6rem - 7.5%);
      margin-left: calc(-6rem - 7.5%);
    }
  }
`;

export const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;

  @media screen and (max-width: 1350px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Scroll = styled.span`
  position: absolute;
  bottom: 3rem;
  left: calc(50% - 8px);

  @media screen and (max-width: 1350px) {
    display: none;
  }
`;

export const Arrow = styled(ArrowSVG)`
  position: relative;

  animation: updown 1s ease-in-out infinite alternate;
`;
