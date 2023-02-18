import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TableWrapper } from "../../../../components/Generic/Style";
import { TextInput } from "./TextInput";
import { setSelectedData } from "../../../../redux/otkSlice";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Button from "antd/lib/button";
import notification from "antd/lib/notification";
import { requests } from "../../../../services/otk";
import { NumberInput } from "./NumberInput";

const Table = ({ data, createDate, deleteHandler, customUpdate }) => {
  const { idFlow } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const [doubleClickType, setDoubleClickType] = useState("");
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const removeOTKHandler = (value) => {
    deleteHandler(value);
    requests
      .removeOtk({
        createDate,
        flowType: idFlow,
        idProducts: [value._id],
      })
      .then(() => {})
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
  };

  const doubleClickHandler = ({ value, type }) => {
    setShowUpdateInput(true);
    setDoubleClickType(type);
    dispatch(setSelectedData(value));
  };

  const canselHandler = () => {
    setShowUpdateInput(false);
    setDoubleClickType("");
    dispatch(setSelectedData({}));
  };

  const saveHandler = () => {
    customUpdate(selectedData);
    requests
      .updateOtk({
        createDate,
        flowType: idFlow,
        shoudUpdateData: { ...selectedData },
        _id: data._id,
      })
      .then(() => {
        canselHandler();
      })
      .catch(() => {
        canselHandler();
      });
  };

  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th isFirst>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>Products</TableWrapper.Th>
            <TableWrapper.Th success>things</TableWrapper.Th>
            <TableWrapper.Th danger>Fake</TableWrapper.Th>
            <TableWrapper.Th>Actions</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.data?.map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td isFirst>{idx + 1}</TableWrapper.Td>
              <TableWrapper.Td
                onDoubleClick={() =>
                  doubleClickHandler({
                    value,
                    type: "productName",
                  })
                }
              >
                {showUpdateInput &&
                value._id === selectedData._id &&
                doubleClickType === "productName" ? (
                  <TextInput cansel={canselHandler} save={saveHandler} />
                ) : (
                  value.productName
                )}
              </TableWrapper.Td>
              <TableWrapper.Td
                success
                onDoubleClick={() =>
                  doubleClickHandler({ value, type: "things" })
                }
              >
                {showUpdateInput &&
                value._id === selectedData._id &&
                doubleClickType === "things" ? (
                  <NumberInput
                    type={"things"}
                    cansel={canselHandler}
                    save={saveHandler}
                  />
                ) : (
                  value.things
                )}
              </TableWrapper.Td>
              <TableWrapper.Td
                danger
                onDoubleClick={() =>
                  doubleClickHandler({ value, type: "fake" })
                }
              >
                {showUpdateInput &&
                selectedData._id === value._id &&
                doubleClickType === "fake" ? (
                  <NumberInput
                    type={"fake"}
                    cansel={canselHandler}
                    save={saveHandler}
                  />
                ) : (
                  value.fake
                )}
              </TableWrapper.Td>
              <TableWrapper.Td>
                <Button danger onClick={() => removeOTKHandler(value)}>
                  Delete
                </Button>
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export { Table };
