import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import { Wrapper } from "./style";
import { Table } from "./Table";
import { TableLoading } from "../../../components/Generic/TableLoading";
import { requests } from "../../../services/countWrok";

const CountWork = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };

  const customUpdateHandler = (shouldUpdateData) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shouldUpdateData._id ? shouldUpdateData : value
      ),
    });
  };

  useEffect(() => {
    setLoading(true);
    requests
      .getCountWork({ flowType: idFlow, createDate: prefixTimeState })
      .then((resp) => {
        setData(resp.data.data[0] || resp.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [prefixTimeState]);

  return (
    <Wrapper>
      <Wrapper.Title>Count-work</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      {loading ? (
        <TableLoading count={15} />
      ) : (
        <Table
          data={data}
          customUpdate={customUpdateHandler}
          createDate={prefixTimeState}
        />
      )}
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
