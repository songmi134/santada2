import styled from "styled-components";
import backImg from "../../src_assets/back.jpg";

export const Title = styled.div`
  font-family: "Merriweather", "Spoqa Han Sans";
  font-style: italic;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: white;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(60px);

  background: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;
