import styled from "styled-components";

export const Wrapper = styled.div``;

Wrapper.Table = styled.table`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
Wrapper.Thead = styled.thead``;
Wrapper.Tbody = styled.tbody``;
Wrapper.Th = styled.th`
  padding: 10px;
  ${({ isFirst }) => !isFirst && "border-left: 1px solid rgb(240, 240, 240)"}
`;
Wrapper.Td = styled.td`
  padding: 10px;
  ${({ isFirst }) => !isFirst && "border-left: 1px solid rgb(240, 240, 240)"}
`;
Wrapper.Tr = styled.tr`
  border-top: 1px solid rgb(240, 240, 240);
`;
