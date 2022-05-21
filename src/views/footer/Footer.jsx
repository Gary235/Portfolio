import { FooterContainer, SocialMediaText } from "./styles"

const Footer = () => {

  return (
    <FooterContainer>
      <SocialMediaText target="_blank" href="https://www.linkedin.com/in/gary-berkman">linkedin</SocialMediaText>
      <SocialMediaText target="_blank" href="https://www.instagram.com/gary.berkman/">instagram</SocialMediaText>
      <SocialMediaText href="mailto:berkman.gary@gmail.com">berkman.gary@gmail.com</SocialMediaText>
    </FooterContainer>
  )
}

export default Footer
