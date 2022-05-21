import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

import { ContactContainer, Form, InputWrapper, Submit, SubmitWrapper, TextArea, TextInput } from "./styles"

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const inputsSetters = { 'name': setName, 'email': setEmail, 'message': setMessage }

  const handleInputChange = event => {
    const {target: { name, value }} = event;
    const setter = inputsSetters[name];

    setter(value)
  }

  const clearInputs = () => Object.values(inputsSetters).forEach(setter => setter(''))

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iqbz12q', 'template_zkd74qq', form.current, 'user_KNnwW9W1g0gHb8S6hsh6F')
      .then(console.log)
      .catch(console.error);

    clearInputs()
  }

  return (
    <ContactContainer id="contact">
      <Form ref={form} onSubmit={handleSubmit}>
        <InputWrapper label="'name'" showInsideInput={!name}>
          <TextInput tabIndex={1} value={name} type="text" name="name" label="name" onChange={handleInputChange} required />
        </InputWrapper>

        <InputWrapper label="'email'" showInsideInput={!email}>
          <TextInput tabIndex={2} value={email} type="email" name="email" onChange={handleInputChange} required />
        </InputWrapper>

        <InputWrapper label="'message'" showInsideInput={!message}>
          <TextArea tabIndex={3} value={message} name="message" onChange={handleInputChange} required />
        </InputWrapper>

        <SubmitWrapper>
          <Submit tabIndex={4} type="submit" value="send" />
        </SubmitWrapper>
      </Form>
    </ContactContainer>
  )
}

export default Contact
