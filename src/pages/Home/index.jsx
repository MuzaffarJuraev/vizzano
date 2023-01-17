import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Generic/Card";
import { Wrapper } from "./style";
import { flows } from "./flows";
import store from "../../assets/images/store.png";
import report from "../../assets/images/report.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Title>Flows</Wrapper.Title>
      <Wrapper.CardsContainer>
        {flows.map((value) => (
          <Card
            key={value.id}
            {...value}
            onClick={() => navigate(`flow/${value.id}`)}
          />
        ))}
      </Wrapper.CardsContainer>
      <Wrapper.Title>Store and Report</Wrapper.Title>
      <Wrapper.CardsContainer>
        <Card title={"Store"} img={store} onClick={() => navigate("report")} />
        <Card
          title={"Report"}
          img={report}
          onClick={() => navigate("report")}
        />
      </Wrapper.CardsContainer>
    </Wrapper>
  );
};

export default Home;
