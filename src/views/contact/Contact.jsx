import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

import handDrawnArrow from "../../assets/hand_drawn_arrow.svg"

import {
  ContactContainer,
  Form,
  InputWrapper,
  Submit,
  SubmitWrapper,
  TextArea,
  TextInput,
  ArrowContainer
} from "./styles"

const Contact = () => {
  const form = useRef();

  const [inputsDisabled, setInputsDisabled] = useState(false)
  const [sending, setSending] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const inputsSetters = { 'name': setName, 'email': setEmail, 'message': setMessage }

  const handleInputChange = event => {
    const {target: { name, value }} = event;
    const setter = inputsSetters[name];

    setter(value)
  }

  const disableInputs = () => setInputsDisabled(true);
  const enableInputs = () => setInputsDisabled(false);

  const startSend = () => {
    setSending(true);

    const submitEl = document.getElementById('contact-submit');
    submitEl.classList.remove('submitted');
    submitEl.classList.add('submitting');
  }

  const finishSend = () => {
    setSending(false);

    const submitEl = document.getElementById('contact-submit');
    submitEl.classList.remove('submitting');
    submitEl.classList.add('submitted');
  }

  const clearInputs = () => Object.values(inputsSetters).forEach(setter => setter(''));

  const handleSubmit = (e) => {
    e.preventDefault();
    disableInputs();
    startSend();

    emailjs
      .sendForm('service_iqbz12q', 'template_zkd74qq', form.current, 'IcHK-nroaFcDg9HQf')
      .then(() => {
        finishSend();
        enableInputs();
        clearInputs();
      })
      .catch((error) => {
        console.error(error)
        finishSend();
        enableInputs();
      });
  }

  return (
    <ContactContainer id="contact">
      {/* <ArrowContainer><img src={handDrawnArrow}/></ArrowContainer> */}
      <Form ref={form} onSubmit={handleSubmit}>
        <InputWrapper label="'name'" showInsideInput={!name}>
          <TextInput
            disabled={inputsDisabled}
            value={name}
            type="text"
            name="name"
            label="name"
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper label="'email'" showInsideInput={!email}>
          <TextInput
            disabled={inputsDisabled}
            value={email}
            type="email"
            name="email"
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper label="'message'" showInsideInput={!message}>
          <TextArea
            disabled={inputsDisabled}
            value={message}
            name="message"
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <SubmitWrapper>
          <Submit
            sending={sending}
            type="submit"
            value={sending ? "sending" : "send"}
            id="contact-submit"
          />
        </SubmitWrapper>
      </Form>
    </ContactContainer>
  )
}

export default Contact
