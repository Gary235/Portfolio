import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  height: calc(100vh - 6rem);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 12rem 4.875rem 0 8.2rem;
  
  position: relative;

  @media screen and (max-width: 1350px) {
    align-items: center;
    padding: 12rem 3rem;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 4rem;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #ffffff;

  @media screen and (max-width: 1350px) {
    font-size: 1rem;
    padding: 0 4.5rem;
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-template-rows: 8.2rem 8.2rem;

  @media screen and (max-width: 1350px) {
    place-content: center;
  }
`;

export const PshImage = styled.img`
  width: 20rem;
  height: 8.2rem;
  object-fit: cover;

  transform: rotate(11deg);
  justify-self: center;
`;

export const UtnImage = styled.img`
  width: 20rem;
  height: 8.2rem;
  object-fit: cover;

  grid-column: 2 / 3;
  grid-row: 2 / 3;
  transform: rotate(-9deg);
`;
