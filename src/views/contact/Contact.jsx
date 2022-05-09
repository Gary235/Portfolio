import { ContactContainer, Form, InputWrapper, TextInput } from "./styles"

const Contact = () => {

  return (
    <ContactContainer id="contact">
      <Form>
        <InputWrapper label="'name'">
          <TextInput type="text" name="name" label="name" />
        </InputWrapper>

        <InputWrapper label="'email'">
          <TextInput type="email" name="email" />
        </InputWrapper>

      </Form>
    </ContactContainer>
  )
}

export default Contact
