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
  /* flex-basis: 345px; */

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

export const ImageWrapper2 = styled.div`
  position: relative;
  width: 20rem;
  height: 23rem;
  border-radius: 120px;

  transition: transform 0.1s ease;
  transform-style: preserve-3d;
  will-change: transform;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20rem;
    height: 23rem;
    border-radius: 120px;

    filter: contrast(3);
    background-image: url(/assets/blobs.png);
    background-repeat: no-repeat;
    background-size: contain;
    animation: 10s rotate ease-in-out infinite;
    z-index: -5;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20rem;
    height: 23rem;
    border-radius: 120px;

    background-color: #ffffff50;
    backdrop-filter: blur(70px);
    z-index: -1;
  }

  @media screen and (max-width: 1350px) {
    width: 12rem;
    height: 12rem;
    border-radius: 80px;

    margin-bottom: 2rem;

    &::before {
      width: 12rem;
      height: 12rem;
      border-radius: 50px;
      border-radius: 80px;

    }
    &::after {
      width: 12rem;
      height: 12rem;
      border-radius: 50px;
      border-radius: 80px;
    }
  }
`;

export const ShadowBorders = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 23rem;
  border-radius: 120px;

  box-shadow: 0px -3px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 3px 4px 0px rgba(255, 255, 255, 0.36) inset;
  @media screen and (max-width: 1350px) {
    width: 12rem;
    height: 12rem;
    border-radius: 80px;
  }
`;

export const Sign = styled.img`
  position: absolute;
  bottom: -20%;
  right: -30%;
  transform: rotate(15deg);

  @media screen and (max-width: 1350px) {
    width: 120px;
    bottom: -10%;
    right: -20%;
  }
`;

export const ProfileImage2 = styled.img`
  width: 20rem;
  height: 23rem;
  border-radius: 120px;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(-5px 0 10px #00000070);

  @media screen and (max-width: 1350px) {
    width: 12rem;
    height: 12rem;
    border-radius: 80px;
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

export const Numbers = styled.div`
  /* flex-basis: 345px; */
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  gap: 3rem;


  @media screen and (max-width: 1350px) {
    display: none;
  }
`;

export const Number = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: end;
  color: #FFE0E0;
  font-size: 16px;
  font-weight: 400;

  & strong {
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.40);
    font-family: 'Space Mono', monospace;
    font-size: 40px;
    font-weight: 700;
  }
`;
