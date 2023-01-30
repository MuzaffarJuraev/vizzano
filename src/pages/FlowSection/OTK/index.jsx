import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import { Wrapper } from "./style";
import { Table } from "./Table";
const OTK = () => {
  const { prefixTime } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };
  return (
    <Wrapper>
      <Wrapper.Title>OTK</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Table />
      <Button type="primary" style={{ margin: "50px 0" }}>
        +Add product
      </Button>
    </Wrapper>
  );
};

export default OTK;
