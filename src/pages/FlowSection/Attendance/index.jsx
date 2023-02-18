import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TableLoading } from "../../../components/Generic/TableLoading";
import { Table } from "./Table";
import { AddMemberModal } from "./AddMemberModal";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import { Wrapper } from "./style";
import { requests } from "../../../services/attendance";
import { notification } from "antd";

const Attendance = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [disableModal, setDisableModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(Number(prefixTime));
  };

  const deleteUser = (user) => {
    setData({
      ...data,
      data: data.data.filter((value) => value._id !== user._id),
    });
  };

  const updateUser = (user) => {
    setData({
      ...data,
      data: data.data.map((value) => (value._id === user._id ? user : value)),
    });
  };

  const addHandler = (users) => {
    setData({
      ...data,
      data: users,
    });
  };

  const onAddHandler = (user) => {
    if (user.name && user.surname) {
      setDisableModal(true);
      requests
        .addMerchant({
          flowType: idFlow,
          createDate: prefixTimeState,
          fullName: `${user.name} ${user.surname}`,
        })
        .then((data) => {
          addHandler(data.data.data[0].data);
          setDisableModal(false);
        })
        .catch((err) => {
          setLoading(false);
          setDisableModal(false);
          if (err.response.status === 404) {
            notification["error"]({
              message: "Error 404",
              placement: "topRight",
              description: err.code,
            });
            return;
          } else if (err.response.status >= 500) {
            notification["error"]({
              message: "Error",
              placement: "topRight",
              description: "Oops, something went wrong with server",
            });
          } else if (err.response.status === 401) {
            localStorage.clear();
            navigate(0);
          }
        });
    } else {
      notification["error"]({
        message: "Error",
        placement: "topRight",
        description: "Please, fill all inputs",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    requests
      .getAllsMerchants({ idFlow, createDate: prefixTimeState })
      .then((resp) => {
        setData(resp.data.data[0] || resp.data.data);
        setLoading(false);
      });
  }, [prefixTimeState, idFlow]);

  return (
    <Wrapper>
      <AddMemberModal
        onAddHandler={onAddHandler}
        showModal={showModal}
        setShowModal={setShowModal}
        disableModal={disableModal}
      />
      <Wrapper.Title>Attendance</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Button type="primary" onClick={() => setShowModal(true)}>
        +add worker
      </Button>
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <Table
          data={data}
          updateUser={updateUser}
          deleteUser={deleteUser}
          prefixTime={prefixTimeState}
        />
      )}
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
