import styled from 'styled-components'

export const NavContainer = styled.header`
  width: 80%;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 2rem;
  z-index: 50;

  @media screen and (max-width: 1350px) {
    width: 90%;
  }
`;

export const NavBar = styled.nav`
  width: fit-content;
  height: 100%;
  padding: 1.75rem 2rem;
  background: #99999950;
  backdrop-filter: blur(1rem);
  border-radius: 0.75rem;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
