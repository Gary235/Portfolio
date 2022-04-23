import styled from 'styled-components'

export const MyProjectsContainer = styled.div`
  height: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 12rem 4.875rem 0 8.2rem;
  
  position: sticky;
  top: 0;

  @media screen and (max-width: 1350px) {
    align-items: center;
    padding: 12rem 3rem;
  }
`;