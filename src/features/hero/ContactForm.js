import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #c9ccd4;
  border-radius: 6px;
  padding: 12px 24px;
  height: 60px;
  width: 100%;
  ::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: #7a7a7a;
  }
  margin-bottom: 16px;
`;

const Form = styled.form`
  width: 495px;
`;

const SubmitBtn = styled.input`
  background-color: black;
  color: #fff;
  border-radius: 6px;
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 6px 8px;
  border: none;
`;

export default function ContactForm() {
  return (
    <Form>
      <Input placeholder="Your email" />
      <Input placeholder="Name" />
      <Input placeholder="Messages" style={{ height: "150px" }} />
      <SubmitBtn type="submit" value="Submit Message" />
    </Form>
  );
}
