import { Wrapper } from "./style";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
const Table = ({ data }) => {
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th isFirst>
              <OrderedListOutlined />
            </Wrapper.Th>
            <Wrapper.Th>
              <Checkbox checked={data.isAllCome} />
            </Wrapper.Th>
            <Wrapper.Th>Full Name</Wrapper.Th>
            <Wrapper.Th>action</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {data?.data?.map((value, idx) => (
            <Wrapper.Tr key={idx}>
              <Wrapper.Td isFirst>{idx + 1}</Wrapper.Td>
              <Wrapper.Td>
                <Checkbox checked={value.isCome} />
              </Wrapper.Td>
              <Wrapper.Td>{value.fullName}</Wrapper.Td>
              <Wrapper.Td>
                <Button danger>Delete</Button>
              </Wrapper.Td>
            </Wrapper.Tr>
          ))}
        </Wrapper.Tbody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export { Table };
