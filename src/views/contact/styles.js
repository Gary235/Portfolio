import styled from 'styled-components'

export const ContactContainer = styled.section`
  background-color: #d11d95;
  height: fit-content;
  padding: 2rem 0;
  width: 100%;
  border-radius: 5px;
  background-size: 120px 120px;
  background-image: linear-gradient(
      135deg,
      #e621a4 25%,
      transparent 25%,
      transparent 50%,
      #e621a4 50%,
      #e621a4  75%,
      transparent 75%,
      transparent
  );
  animation: animate-stripes 5s linear infinite;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  padding: 0 10%;

  grid-template-areas: 'name message' 'email message' 'submit submit';
  gap: 1rem;
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
  
  margin-top: 0.5rem;
  width: fit-content;
  padding: 1rem 2rem;
  justify-self: center;
  cursor: pointer;
  border-radius: 0.2rem;
  background: #000;
  color: #fff;
  font-weight: 600;

  border: none;
  outline: 3px solid transparent;

  transition: background 0.2s, outline 0.2s;

  &:hover {
    background: #2b2b2b;
  }
  &:focus {
    outline: 3px solid #00000050;
  }
`
