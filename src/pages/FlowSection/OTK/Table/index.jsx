import { TableWrapper } from "../../../../components/Generic/Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Button from "antd/lib/button";
const Table = () => {
  const data = [
    {
      _id: 1,
      productName: "shim",
      fake: 2,
      things: 499,
    },
  ];
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
          {data?.map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td isFirst>{idx + 1}</TableWrapper.Td>
              <TableWrapper.Td>{value.productName}</TableWrapper.Td>
              <TableWrapper.Td success>{value.things}</TableWrapper.Td>
              <TableWrapper.Td danger>{value.fake}</TableWrapper.Td>
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
