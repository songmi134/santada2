import React from "react";
import Mountaininfo from "./Mountaininfo";
import { Showcase, List } from "./Detail.style";

const Detail = () => {
  return (
    <>
      <Showcase>
        <List>
          <Mountaininfo />
          <hr></hr>
        </List>
      </Showcase>
    </>
  );
};

export default Detail;
