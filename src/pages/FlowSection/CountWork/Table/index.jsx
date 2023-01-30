import { TableWrapper } from "../../../../components/Generic/Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
const Table = () => {
  const data = [
    {
      fullname: "name",
      fake: 12,
      price: 299,
      isCome: true,
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
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th danger>fake</TableWrapper.Th>
            <TableWrapper.Th>total</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td danger={!value.isCome} isFirst>
                {idx + 1}
              </TableWrapper.Td>
              <TableWrapper.Td danger={!value.isCome}>
                {value.fullname}
              </TableWrapper.Td>
              <TableWrapper.Td danger>{value.fake}</TableWrapper.Td>
              <TableWrapper.Td danger={!value.isCome}>
                {value.price}
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export { Table };
