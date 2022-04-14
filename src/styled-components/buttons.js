import styled from 'styled-components'

export const MulticolorButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(100deg, #FF42BF 30%, #FFF84B 110%) no-repeat;
  color: #000000;

  font-size: 0.875rem;
  font-weight: 600;
  
  border-radius: 0.625rem;
  border: 2px solid currentColor;
  outline: none;

  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-position: 164px 0;
    color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    padding: 0.8rem 2.5rem;

    &:hover {
      background-position: 0;
      color: #000;
    }
  }
`;

export const BWButton = styled.button`
  width: fit-content;
  height: fit-content;

  padding: 0.8rem 1.6rem;
  background: linear-gradient(100deg, #FF42BF 30%, #FFF84B 110%) no-repeat;
  background-position: 164px 0;
  color: #ffffff;

  font-size: 0.875rem;
  font-weight: 600;
  
  border-radius: 0.625rem;
  border: 2px solid currentColor;
  outline: none;

  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  
  &:hover {
    background-position: 0 0;
    color: #000000;
  }

  @media screen and (max-width: 1024px) {
    &:hover {
      background-position: 164px 0;
      color: #FFFFFF;
    }
  }
`;