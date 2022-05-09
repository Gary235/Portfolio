import styled from 'styled-components'

export const AppLayout = styled.main`
  width: 100%;
  padding: 0 10% 0;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: 1350px) {
    padding: 5rem 5% 0;
  }
`;
