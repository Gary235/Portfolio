import styled from 'styled-components'

export const AppLayout = styled.div`
  width: 100%;
  padding: 0 10% 0;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: 1350px) {
    padding: 5rem 5% 0;
    gap: 1.5rem;
  }
`;
