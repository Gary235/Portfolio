import styled from 'styled-components'

export const ProjectContainer = styled.article`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    gap: 0;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const ProjectBody = styled.p`
  color: #ffffff;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`


export const ProjectImageWrapper = styled.figure`
  height: 100%;
  width: fit-content;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -1rem;
    right: -0.25rem;

    z-index: -1;
    background-image: ${({image}) => `url(${image})`};
    filter: blur(35px);
    opacity: 0.4;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    &::before {
      display: none;
    }
  }
`

export const ProjectImage = styled.img`
  height: 100%;
  aspect-ratio: 1.75 / 1;
  object-fit: cover;
  border-radius: 0.25rem;

  @media screen and (max-width: 1000px) {
    height: 80%;
    width: 100%;
    aspect-ratio: unset;
  }
`
