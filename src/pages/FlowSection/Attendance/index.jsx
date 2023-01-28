import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import Spin from "antd/lib/spin";
import { Wrapper } from "./style";
import { Table } from "./Table";
import { requests } from "../../../services/attendance";

const Attendance = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };
  useEffect(() => {
    setLoading(true);
    requests
      .getAllsMerchants({ idFlow, createDate: prefixTimeState })
      .then((resp) => {
        setData(resp.data.data[0]);
        setLoading(false);
      });
  }, [prefixTimeState, idFlow]);
  return (
    <Wrapper>
      <Wrapper.Title>Attendance</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Button type="primary">+add worker</Button>
      {loading ? <Spin size="large" /> : <Table data={data} />}
      <Button
        style={{ margin: "50px 0" }}
        onClick={() =>
          navigate(`/flow/${idFlow}/count-work/${prefixTimeState}`)
        }
      >
        Go to Count Work
      </Button>
    </Wrapper>
  );
};

export default Attendance;
