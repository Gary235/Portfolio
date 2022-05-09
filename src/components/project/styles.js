import styled from 'styled-components'

export const ProjectContainer = styled.article`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: space-between;
  gap: 2rem;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`

export const ProjectImage = styled.img`
  height: 100%;
  aspect-ratio: 1.75 / 1;
  object-fit: cover;
  border-radius: 0.25rem;
`
