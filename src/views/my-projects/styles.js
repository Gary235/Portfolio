import styled from 'styled-components'

export const MyProjectsContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: 1350px) {
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    gap: 3rem;
  }
`;