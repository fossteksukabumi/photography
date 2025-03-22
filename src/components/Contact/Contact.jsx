import React from "react";
import {
  Section,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  ContactDetails,
  ContactItem,
  Icon,
  SocialLinks,
  SocialLink,
} from "./Contact.style";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import ikon
import contactImage from "../../assets/foto/42.jpg";

const ContactInformation = () => {
  return (
    <Section>
      <ImageContainer>
        <img
          src={contactImage}
          alt="Contact"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageContainer>

      <InfoContainer>
        <Title>Get in Touch</Title>
        <Description>Have any questions or need assistance? Feel free to contact us!</Description>

        {/* Tambahkan Informasi Kontak */}
        <ContactDetails>
          <ContactItem>
            <Icon><FaEnvelope /></Icon>
            <span>contact@yourwebsite.com</span>
          </ContactItem>

          <ContactItem>
            <Icon><FaPhoneAlt /></Icon>
            <span>+62 812-3456-****</span>
          </ContactItem>

          <ContactItem>
            <Icon><FaMapMarkerAlt /></Icon>
            <span>Jl. Sudirman No. 123, Jakarta, Indonesia</span>
          </ContactItem>
        </ContactDetails>

        {/* Social Media Links */}
        <SocialLinks>
          <SocialLink href="https://instagram.com">Instagram</SocialLink>
          <SocialLink href="https://facebook.com">Facebook</SocialLink>
          <SocialLink href="https://twitter.com">Twitter</SocialLink>
        </SocialLinks>
      </InfoContainer>
    </Section>
  );
};

export default ContactInformation;
