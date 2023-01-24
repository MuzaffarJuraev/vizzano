import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Generic/Card";
import { Wrapper } from "./style";
import { helper } from "./helper";
import { getCurrentTime } from "../../utils/getCurrentTime";

const Flow = () => {
  const { idFlow } = useParams();
  const navigate = useNavigate();
  const navigator = (path) => {
    navigate(`${path}/${getCurrentTime()}`);
  };
  return (
    <Wrapper>
      <Wrapper.Title>Flow {idFlow}</Wrapper.Title>
      <Wrapper.CardsContainer>
        {helper.map((value) => (
          <Card
            key={value.id}
            onClick={() => navigator(value.navigation)}
            {...value}
            imgWidth={"199px"}
            imgHeight={"199px"}
          />
        ))}
      </Wrapper.CardsContainer>
    </Wrapper>
  );
};

export default Flow;
