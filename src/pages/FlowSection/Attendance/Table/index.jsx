import { useParams, useNavigate } from "react-router-dom";
import { TableWrapper } from "../../../../components/Generic/Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import { notification } from "antd";
import { requests } from "../../../../services/attendance";
import { useEffect, useState } from "react";

const Table = ({ data, updateUser, deleteUser, prefixTime }) => {
  const { idFlow } = useParams();
  const navigate = useNavigate();
  const [customAllCome, setCustomAllCome] = useState(false);
  const [triggerAllCome, setTriggerAllCome] = useState(false);
  const toggleUserCome = (user) => {
    setTriggerAllCome(!triggerAllCome);
    updateUser(user);
    requests
      .updateMerchant({
        createDate: Number(prefixTime),
        flowType: idFlow,
        shoudUpdateData: user,
        _id: data._id,
      })
      .then((data) => {})
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
  const removerUser = (user) => {
    setTriggerAllCome(!triggerAllCome);
    deleteUser(user);
    requests
      .removeMerchant({
        createDate: Number(prefixTime),
        flowType: idFlow,
        idUsers: [user._id],
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
  useEffect(() => {
    setCustomAllCome(data?.data?.every((item) => item.isCome) || false);
  }, [triggerAllCome, data?.data]);
  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th isFirst>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox checked={customAllCome} />
            </TableWrapper.Th>
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th>action</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.data?.map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td isFirst>{idx + 1}</TableWrapper.Td>
              <TableWrapper.Td>
                <Checkbox
                  checked={value.isCome}
                  onChange={() => {
                    toggleUserCome({ ...value, isCome: !value.isCome });
                  }}
                />
              </TableWrapper.Td>
              <TableWrapper.Td>{value.fullName}</TableWrapper.Td>
              <TableWrapper.Td>
                <Button
                  danger
                  onClick={() => {
                    removerUser(value);
                  }}
                >
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
