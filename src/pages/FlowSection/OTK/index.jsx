import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../../../components/Generic/DatePicker";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { Wrapper } from "./style";
import { Table } from "./Table";
import { TableLoading } from "../../../components/Generic/TableLoading";
import { AddModal } from "./Add";
import { requests } from "../../../services/otk";

const OTK = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(Number(prefixTime)).getTime()
  );
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addModalDisable, setAddModalDisable] = useState(false);

  const dateChangeHandler = (prefixTimeProp) => {
    setPrefixTimeState(Number(prefixTimeProp));
  };

  const deleteHandler = (value) => {
    setData({
      ...data,
      data: data.data.filter((item) => item._id !== value._id),
    });
  };

  const addProductHandler = (product) => {
    setData({
      ...data,
      data: product,
    });
  };

  const addModalHandler = (product) => {
    if (product) {
      setAddModalDisable(true);
      requests
        .addOtk({
          createDate: prefixTimeState,
          flowType: idFlow,
          productName: product,
        })
        .then((respons) => {
          addProductHandler(respons.data.data[0].data);
          setAddModalDisable(false);
        })
        .catch((err) => {
          setAddModalDisable(false);
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
        description: "You have to fill the input!",
      });
    }
  };

  const customUpdateHandler = (shouldUpdateData) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shouldUpdateData._id ? shouldUpdateData : value
      ),
    });
  };

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };
  const hideAddModalHandler = () => {
    setShowAddModal(false);
  };
  useEffect(() => {
    requests
      .getOtk({ createDate: prefixTimeState, flowType: idFlow })
      .then((res) => {
        setData(res.data.data[0] || data.data.data);
        setLoading(false);
      })
      .catch((err) => {
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
  }, [prefixTimeState]);

  return (
    <Wrapper>
      <AddModal
        disable={addModalDisable}
        show={showAddModal}
        onAdd={addModalHandler}
        onCansel={hideAddModalHandler}
      />
      <Wrapper.Title>OTK</Wrapper.Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      {loading ? (
        <TableLoading count={15} />
      ) : (
        <Table
          data={data}
          createDate={prefixTimeState}
          deleteHandler={deleteHandler}
          customUpdate={customUpdateHandler}
        />
      )}
      <Button
        type="primary"
        style={{ margin: "50px 0" }}
        onClick={showAddModalHandler}
      >
        +Add product
      </Button>
    </Wrapper>
  );
};

export default OTK;
