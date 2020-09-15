import React from "react";
import styled from "styled-components";
import avatarImg from "../../images/girl-flowers.png";

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

const Author = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  margin-top: 14px;
  margin-bottom: 1px;
`;

const Position = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

const Testimonial = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -1px;
  width: 905px;
`;

const TestimonialWrapper = styled.div`
  font-family: Overpass;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
  padding-bottom: 75px;
  width: 100vw;
  margin: 0 auto;
`;

export default function Testimonials() {
  return (
    <TestimonialWrapper>
      <Avatar src={avatarImg} />
      <Testimonial>
        “Amazing experience, I love it a lot. Thanks to the team I got that Job,
        great!”
      </Testimonial>
      <Author>Lassy Chester</Author>
      <Position>Art Director</Position>
    </TestimonialWrapper>
  );
}
