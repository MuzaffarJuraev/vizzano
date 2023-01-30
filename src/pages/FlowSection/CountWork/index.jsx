import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import { Wrapper } from "./style";
import { Table } from "./Table";

const CountWork = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };
  return (
    <Wrapper>
      <Wrapper.Title>Count-work</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Table />
      <Button
        style={{ margin: "50px 0" }}
        onClick={() =>
          navigate(`/flow/${idFlow}/attendance/${prefixTimeState}`)
        }
      >
        Go to Attendance
      </Button>
    </Wrapper>
  );
};

export default CountWork;
