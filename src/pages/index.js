import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const TextWrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  color: white;
`;
const Text = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 1rem 10%;
`;

const ContactButton = styled.a`
  text-decoration: none;
  position: relative;
  appearance: none;
  background: #382d45bf;
  padding: 1em 2em;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;

  span {
    position: relative;
    pointer-events: none;
  }

  &::before {
    --size: 0;

    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #ad5389bf, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover::before {
    --size: 400px;
  }
`;

const nonDecoratedLink = styled.a`
  text-decoration: none;
`;

const IndexPage = () => (
  <TextWrapper>
    <Text>
      <h1>We are making the web an awesome place</h1>
      <p>
        Here at CodeMonkey, we will help you to take your business to the next
        level by creating amazing web and mobile experiences for your clients.
      </p>

      <ContactButton href="mailto:info@codemonkey.rocks">
        <span>CONTACT US</span>
      </ContactButton>
    </Text>
  </TextWrapper>
);

export default IndexPage;
