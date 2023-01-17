import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, img, onClick, imgWidth, imgHeight }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Img src={img} width={imgWidth} height={imgHeight} />
    </Wrapper>
  );
};

export default Card;
