import styled from "styled-components";

export const TableWrapper = styled.div``;

TableWrapper.Table = styled.table`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
TableWrapper.Thead = styled.thead``;
TableWrapper.Tbody = styled.tbody``;
TableWrapper.Th = styled.th`
  padding: 10px;
  ${({ danger }) =>
    danger && `background-color: rgb(255,241,232); color: #da5a39;`};
  ${({ success }) => success && `background-color: #f6ffec; color: #399e0e;`};
  ${({ isFirst }) => !isFirst && "border-left: 1px solid rgb(240, 240, 240)"}
`;
TableWrapper.Td = styled.td`
  padding: 10px;
  ${({ danger }) =>
    danger && `background-color: rgb(255,241,232); color: #da5a39;`};
  ${({ success }) => success && `background-color: #f6ffec; color: #399e0e;`};
  ${({ isFirst }) => !isFirst && "border-left: 1px solid rgb(240, 240, 240)"}
`;
TableWrapper.Tr = styled.tr`
  border-top: 1px solid rgb(240, 240, 240);
`;
