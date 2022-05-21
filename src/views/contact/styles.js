import styled from 'styled-components'
import arrow from './../../assets/arrow_02.svg'

export const ContactContainer = styled.section`
  background-color: #d11d95;
  height: fit-content;
  padding: 2rem 0;
  width: 100%;
  border-radius: 5px;
  background-size: 120px 120px;
  background-image: linear-gradient(
      135deg,
      #e621a4 25%, transparent 25%,
      transparent 50%, #e621a4 50%,
      #e621a4 75%, transparent 75%,
      transparent
  );
  animation: animate-stripes 7s linear infinite;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  position: relative;

  /* &::after {
    content: '';
    display: inline;
    width: 100px;
    height: 70px;

    position: absolute;
    top: 10px;
    left: calc(10% - 80px);

    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;

    @media screen and (max-width: 900px) {
      left: -2%;
    }
  } */
`;

export const Form = styled.form`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 1fr) ;
  padding: 0 10%;

  grid-template-areas: 'name message submit'
                       'email message submit'
  ;
  gap: 1rem;
  justify-content: center;
  z-index: 5;

  @media screen and (max-width: 900px) {
    grid-template-columns: unset;
    grid-template-areas: 'name' 'email' 'message' 'submit';
    justify-content: unset;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  
  height: ${({label}) => label === "'message'" ? '7.8rem' : '3.4rem'};
  grid-area: ${({label}) => label.slice(1, label.length - 1)};

  display: flex;
  align-items: center;

  &::after {
    content: ${({label}) => label || ''};
    position: absolute;
    left: 0.75rem;
    z-index: 20;
    color: #8b8b8b;
    
    transition: top 0.2s;
    
    font-size: ${({showInsideInput}) => showInsideInput ? '14px' : '11px'};
    top: ${({showInsideInput}) => showInsideInput ? '1rem' : '2px'};
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 3.4rem;
  padding: 0 0.75rem;
  background-color: #f8f8f8;
  border-radius: 0.3rem;
  border: none;
  outline: 3px solid transparent;

  transition: outline 0.2s;

  &:focus {
    outline: 3px solid #ffffff50;
  }
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 7.8rem;
  padding: 1rem 0.75rem 0;
  background-color: #f8f8f8;
  border-radius: 0.35rem;
  border: none;
  outline: 3px solid transparent;

  resize: none;
  overflow: hidden;

  transition: outline 0.2s;

  &:focus {
    outline: 3px solid #ffffff50;
  }
`

export const Submit = styled.input`
  grid-area: submit;
  
  width: fit-content;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 0.35rem;
  background: #000;
  color: #fff;
  font-weight: 600;
  position: relative;

  border: none;
  outline: 3px solid transparent;

  transition:outline 0.2s, box-shadow 100ms, transform 0.2s;

  &:hover {
    box-shadow: 0 20px 25px -10px #000000A0;
    transform: translateY(-5px);
  }

  &:focus {
    outline: 3px solid #00000050;
  }

  @media screen and (max-width: 900px) {
    justify-self: center;
  }
`