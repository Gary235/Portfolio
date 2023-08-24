import styled from 'styled-components'

export const MulticolorButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.6rem;
  background: #FFF84B;
  color: #000000;
  box-shadow: 0 0 25px 0 #FFF84B50;

  font-size: 0.875rem;
  font-weight: 600;

  border-radius: 0.625rem;
  border: none;
  outline: none;

  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  white-space: nowrap;

  &:hover {
    background: #FF42BF;
    box-shadow: 0 0 25px 0 #FF42BF50;
  }

  @media screen and (max-width: 1350px) {
    padding: 1rem 2.5rem;
    border-radius: 0.75rem;
  }
`;

export const BWButton = styled.button`
  width: fit-content;
  height: fit-content;

  padding: 0.8rem 1.6rem;
  background: transparent;
  color: #ffffff;

  font-size: 0.875rem;
  font-weight: 600;

  border-radius: 0.625rem;
  border: 2px solid #ffffff30;
  outline: none;

  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    background: #ffffff30;
  }
`;