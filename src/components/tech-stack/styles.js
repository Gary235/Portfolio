import styled from 'styled-components'

export const TechIcons = styled.span`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1350px) {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TechIcon = styled.img`
  cursor: ${({isProject}) => isProject ? 'pointer': 'unset'};
`;
