import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/Header";
import "./index.css";
import backgroundImg from "../images/bg-img.jpg";

const BackgroundImage = styled.div``;

const Layout = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const TemplateWrapper = ({ children }) => (
  <Layout>
    <Helmet
      title="CodeMonkey"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <BackgroundImage>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </BackgroundImage>
  </Layout>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
