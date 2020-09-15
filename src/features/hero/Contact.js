import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const ContactWrapper = styled.div`
  background-color: #f7fafc;
  width: 100vw;
  padding: 100px 210px;
  font-family: Overpass;
  display: flex;
  justify-content: space-between;
`;

const SectionName = styled.h3`
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1.08333px;
  text-transform: uppercase;
  color: #999999;
`;

const CompanyName = styled.h1`
  font-weight: bold;
  font-size: 46px;
  line-height: 64px;
  letter-spacing: -1.5px;
  margin-top: 8px;
  margin-bottom: 11px;
`;

const Disclaimer = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
  margin-bottom: 172px;
`;

const ContactInfo = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <div>
        <SectionName>Contacts</SectionName>
        <CompanyName>Get in Touch</CompanyName>
        <Disclaimer>If you are not sure yet, shoot us a message!</Disclaimer>
        <ContactInfo>hello@getthatjob.com</ContactInfo>
        <ContactInfo>Jose Galvez 692, 7th Floor. The Board</ContactInfo>
      </div>
      <ContactForm />
    </ContactWrapper>
  );
}
