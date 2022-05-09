import styled from 'styled-components'

export const ContactContainer = styled.section`
  background-color: #d11d95;
  height: 15vh;
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
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// export const TextInput = styled.input`
//   width: 100%;
//   height: 2.5rem;
//   padding: 0 0.75rem;
//   background-color: #f8f8f8;
//   border-radius: 0.5rem;
//   border: none;
//   /* outline: none; */

//   &:focus {

//   }
// `;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 25rem;
  height: 2.5rem;

  &::after {
    content: ${({label}) => label || ''};
    position: absolute;
    left: 0.75rem;
    top: 25%;
    z-index: 20;
    color: black;
    font-size: 12px;
    
    /* ${TextInput}:active & {
      content: ''
    } */
  }

`;

export const TextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  border: none;
  outline: none;

  /* &:focus {
    ${InputWrapper} {
      display: none;
    }
  } */
`;