import React from "react";
import { Wrapper, Title } from "./About.styles";

const About = () => {
  return (
    <>
      <Wrapper bgColor="white" id="about">
        <div style={{ marginBottom: "6rem", width: "100%" }}>
          <Title id="about-text">
            <br />
            <br />
            내 주변 산을 검색해보자!
            <br />
            <br />
          </Title>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
