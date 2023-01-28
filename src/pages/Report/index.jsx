import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/Generic/DatePicker";
import { Wrapper } from "./style";

const Report = () => {
  const { prefixTime } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };
  return (
    <Wrapper>
      <Wrapper.Title>Report</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
    </Wrapper>
  );
};

export default Report;
