import styled from 'styled-components'

export const AboutMeContainer = styled.section`
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
    position: relative;
    line-height: 1.7;
  }
`;

export const DescriptionData = styled.div`
  width: 100%;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const IconsSection = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1350px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    gap: 2rem;
    margin-top: 4rem;
  }
`;

export const IconsTitle = styled.p`
  color: #ffffffaa;
  font-family: monospace;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
  white-space: nowrap;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const Presentation = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  max-width: 85%;

  @media screen and (max-width: 1350px) {
    font-size: 1rem;
    text-align: center;
    max-width: 65%;
    width: 100%;
    min-width: 30ch;
  }
`;
