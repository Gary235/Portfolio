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
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;

  width: fit-content;
  height: 100%;
  padding: 1.75rem 2rem;
  background: #99999950;
  backdrop-filter: blur(1rem);
  border-radius: 0.35rem;

  justify-content: end;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 80%;
    justify-content: center;
    padding: 2rem 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;


  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const MenuToggle = styled.button`
  padding: 1rem;
  background-color: #99999950;
  color: #ffffff;
  border-radius: 0.3rem;
  border: none;
  /* font-weight: 600; */
`

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
`
