import styled from 'styled-components'

export const DashedContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 16.5rem;
  left: 5.2rem;

  width: calc(100% - 7.875rem);
  height: ${props => props.height}px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FFFFFF00' stroke-width='4' stroke-dasharray='33' stroke-dashoffset='25' stroke-linecap='square'/%3e%3c/svg%3e");

  @media screen and (max-width: 1024px) {
    width: calc(100% - 6rem);
    left: 3rem;
  }
`;
