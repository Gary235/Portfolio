import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 1350px) {
    align-items: center;
    gap: 2rem;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 50%;

  @media screen and (max-width: 1350px) {
    font-size: 1rem;
    text-align: center;
    max-width: 85%;
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 16rem 16rem;
  grid-template-rows:    8rem 8rem;

  @media screen and (max-width: 1350px) {
    place-content: center;
    grid-template-columns: 8rem 8rem;
    grid-template-rows: 4rem 4rem;
  }
`;

export const PshImage = styled.img`
  width: 16rem;
  height: 8rem;
  object-fit: cover;

  /* transform: rotate(11deg); */
  justify-self: center;

  @media screen and (max-width: 1350px) {
    width: 8rem;
    height: 4rem;
  }
`;

export const UtnImage = styled.img`
  width: 16rem;
  height: 8rem;
  object-fit: cover;

  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* transform: rotate(-9deg); */

  @media screen and (max-width: 1350px) {
    width: 8rem;
    height: 4rem;
  }
`;
