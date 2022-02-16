import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, Title, Description, ImgL } from "./Detail.style";

const Mountaininfo = () => {
  const [mountainName, setMountainName] = useState(undefined); //산이름
  const [mountainInfo, setMountainInfo] = useState(undefined); //산정보
  const [transInfo, setTransInfo] = useState(undefined); //교통정보
  const [imgUrl, setImgUrl] = useState(undefined); //이미지

  const params = useParams();
  const postId = params.id;

  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get(`/mountains/${postId}`);

      if (!completed) {
        setMountainName(response.data.mountainName);
        setMountainInfo(response.data.mountainInfo);
        setTransInfo(response.data.transInfo);
        setImgUrl(response.data.orgUrl);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      <Header>
        <Title>{mountainName}</Title>
      </Header>
      <ImgL alt="empty" src={imgUrl} />
      <h2>설명</h2>
      <Description>{mountainInfo}</Description>
      <h2>교통정보</h2>
      <Description>{transInfo}</Description>
    </>
  );
};

export default Mountaininfo;
