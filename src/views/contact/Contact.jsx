import { useState } from "react"
import { ContactContainer, Form, InputWrapper, Submit, TextArea, TextInput } from "./styles"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const inputsSetters = { 'name': setName, 'email': setEmail, 'message': setMessage }

  const handleInputChange = event => {
    const {target: { name, value }} = event;
    const setter = inputsSetters[name];

    setter(value)
  }

  return (
    <ContactContainer id="contact">
      <Form>
        <InputWrapper label="'name'" showInsideInput={!name}>
          <TextInput tabIndex={1} value={name} type="text" name="name" label="name" onChange={handleInputChange} required />
        </InputWrapper>

        <InputWrapper label="'email'" showInsideInput={!email}>
          <TextInput tabIndex={2} value={email} type="email" name="email" onChange={handleInputChange} required />
        </InputWrapper>

        <InputWrapper label="'message'" showInsideInput={!message}>
          <TextArea tabIndex={3} value={message} name="message" onChange={handleInputChange} required />
        </InputWrapper>

        <Submit tabIndex={4} type="submit" value="send" />
      </Form>
    </ContactContainer>
  )
}

export default Contact
