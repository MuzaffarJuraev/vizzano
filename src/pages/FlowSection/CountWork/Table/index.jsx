import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TableWrapper } from "../../../../components/Generic/Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import { setSelectedData } from "../../../../redux/countWorkSlice";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { requests } from "../../../../services/countWrok";

const Table = ({ data, customUpdate, createDate }) => {
  const { idFlow } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateType, setUpdateType] = useState("");
  const { selectedData } = useSelector((state) => state.countWork);
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const doubleClickHandler = ({ value, type }) => {
    setShowUpdateInput(true);
    setUpdateType(type);
    dispatch(setSelectedData(value));
  };

  const canselHandler = () => {
    setShowUpdateInput(false);
    setUpdateType("");
    dispatch(setSelectedData({}));
  };

  const saveHanler = () => {
    customUpdate(selectedData);
    requests
      .updateCountWork({
        createDate,
        flowType: idFlow,
        shoudUpdateData: { ...selectedData },
        _id: data._id,
      })
      .then(() => {
        canselHandler();
      })
      .catch((error) => {
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
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th danger>fake</TableWrapper.Th>
            <TableWrapper.Th>total</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data.data?.map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td danger={!value.isCome} isFirst>
                {idx + 1}
              </TableWrapper.Td>
              <TableWrapper.Td
                danger={!value.isCome}
                onDoubleClick={() =>
                  doubleClickHandler({
                    value,
                    type: "fullName",
                  })
                }
              >
                {value._id === selectedData._id &&
                updateType === "fullName" &&
                showUpdateInput ? (
                  <TextInput cansel={canselHandler} save={saveHanler} />
                ) : (
                  value.fullName
                )}
              </TableWrapper.Td>
              <TableWrapper.Td
                danger
                onDoubleClick={() =>
                  doubleClickHandler({
                    value,
                    type: "fake",
                  })
                }
              >
                {value._id === selectedData._id &&
                updateType === "fake" &&
                showUpdateInput ? (
                  <NumberInput
                    type="fake"
                    cansel={canselHandler}
                    save={saveHanler}
                  />
                ) : (
                  value.fake
                )}
              </TableWrapper.Td>
              <TableWrapper.Td
                danger={!value.isCome}
                onDoubleClick={() =>
                  doubleClickHandler({
                    value,
                    type: "price",
                  })
                }
              >
                {value._id === selectedData._id &&
                updateType === "price" &&
                showUpdateInput ? (
                  <NumberInput
                    type="price"
                    cansel={canselHandler}
                    save={saveHanler}
                  />
                ) : (
                  value.price
                )}
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export { Table };
