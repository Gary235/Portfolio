import styled from 'styled-components'

export const BlurredGradient = styled.div`
  width: 10rem;
  height: 10rem;

  position: absolute;
  bottom: -5%;
  left: 50%;
  margin-left: -5rem;

  background: linear-gradient(100deg, #FF42BF 20%, #FFF84B 85%);
  filter: blur(3.5rem) brightness(1.2);
  border-radius: 2.75rem;
`;
