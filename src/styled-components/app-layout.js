import styled from 'styled-components'

export const AppLayout = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 4rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
