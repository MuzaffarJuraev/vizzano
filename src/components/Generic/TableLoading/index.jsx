import { TableWrapper } from "../Style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import Skeleton from "antd/lib/skeleton";
const TableLoading = ({ count }) => {
  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th isFirst>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox disabled />
            </TableWrapper.Th>
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th>action</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {Array.from({ length: count }).map((value, idx) => (
            <TableWrapper.Tr key={idx}>
              <TableWrapper.Td isFirst>{idx + 1}</TableWrapper.Td>
              <TableWrapper.Td>
                <Checkbox disabled />
              </TableWrapper.Td>
              <TableWrapper.Td>
                <Skeleton.Input active size={"large"} />
              </TableWrapper.Td>
              <TableWrapper.Td>
                <Button disabled>Delete</Button>
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export { TableLoading };
