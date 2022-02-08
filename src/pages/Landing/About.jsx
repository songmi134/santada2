import React, { useEffect, useRef } from "react";
import { Wrapper, Title } from "./About.styles";
import { revealText } from "./About.animations";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealText(sectionRef.current, "#about-text");
  }, []);

  return (
    <>
      <Wrapper bgColor="white" id="about" ref={sectionRef}>
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
