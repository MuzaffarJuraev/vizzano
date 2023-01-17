import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Generic/Card";
import { Wrapper } from "./style";
import { helper } from "./helper";

const Flow = () => {
  const { idFlow } = useParams();
  // const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Title>Flow {idFlow}</Wrapper.Title>
      <Wrapper.CardsContainer>
        {helper.map((value) => (
          <Card
            key={value.id}
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
