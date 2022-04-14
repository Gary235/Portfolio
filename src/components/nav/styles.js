import styled from 'styled-components'

export const NavContainer = styled.header`
  width: 100%;
  height: 6rem;

  background: #E5E5E550;
  backdrop-filter: blur(1rem);
  position: fixed;
  z-index: 50;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 4.875rem 0 8.2rem;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
`;
