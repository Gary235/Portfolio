import styled from 'styled-components'
import ArrowSVG from '../../components/svgs/Arrow';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 17rem 4.875rem 0 8.2rem;
  position: relative;
  
  @media screen and (max-width: 1024px) {
    padding: 10rem 3rem;
    gap: 3rem;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ImageWrapper = styled.picture`
  position: relative;
  width: 24rem;
  height: 24rem;

  &::before {
    content: '';
    z-index: -1;
    width: 115%;
    height: 115%;
    border-radius: 100%;

    background: linear-gradient(125deg, #FF5DAD00, #FF71AB75, #FFE1A275, #FFF0A000);
    opacity: 0.17;

    position: absolute;
    left: 50%;
    top: 50%;

    margin-top: calc(-12rem - 7.5%);
    margin-left: calc(-12rem - 7.5%);
  }

  @media screen and (max-width: 1024px) {
    width: 12rem;
    height: 12rem;

    &::before {
      margin-top: calc(-6rem - 7.5%);
      margin-left: calc(-6rem - 7.5%);
    }
  }
`;

export const ProfileImage = styled.img`
  width: 24rem;
  height: 24rem;
  border-radius: 100%;

  @media screen and (max-width: 1024px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Scroll = styled.span`
  width: 10rem;

  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  margin-left: -5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  color: #000000;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Arrow = styled(ArrowSVG)`
  position: relative;

  animation: updown 800ms ease-in-out infinite alternate;
`;
