import { TableWrapper } from "../../../../components/Generic/Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
const Table = ({ data }) => {
  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th isFirst>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox checked={data.isAllCome} />
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
                <Checkbox checked={value.isCome} />
              </TableWrapper.Td>
              <TableWrapper.Td>{value.fullName}</TableWrapper.Td>
              <TableWrapper.Td>
                <Button danger>Delete</Button>
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export { Table };
