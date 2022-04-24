import styled from 'styled-components'

export const TitleXL = styled.h1`
  width: fit-content;

  font-size: clamp(2.25rem, 10vw, 5rem);
  line-height: 1.5;
  font-weight: 700;
  color: white;
  position: relative;

  &::before, &::after {
    position: absolute;
    top: 50%;

    font-family: monospace, 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    color: #FFF7AE99;
  }

  &::before {
    content: '<h1>';
    left: -3rem;
  }
  &::after {
    content: '</h1>';
    right: -3.5rem;
  }
`;

export const TitleL = styled.h2`
  width: fit-content;

  font-size: clamp(1rem, 6vw, 2.5rem);
  line-height: 1;
  font-weight: 700;
  color: white;
  position: relative;

  &::before, &::after {
    position: absolute;
    top: 1rem;

    font-family: monospace, 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    color: #FFF7AE99;
  }

  &::before {
    content: '<h2>';
    left: -3rem;
  }
  &::after {
    content: '</ h2>';
    right: -4rem;
  }
`;

export const TitleM = styled.h3`
  width: fit-content;
  font-size: clamp(1rem, 6vw, 1.75rem);
  line-height: 2;
  font-weight: 600;
  color: white;
  position: relative;

  &::before, &::after {
    position: absolute;
    top: 1rem;

    font-family: monospace, 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    color: #FFF7AE99;
  }

  &::before {
    content: '<h3>';
    left: -3rem;
  }
  &::after {
    content: '</ h3>';
    right: -4rem;
  }
`;