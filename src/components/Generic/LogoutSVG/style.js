import styled from "styled-components";

export const Svg = styled.svg`
  width: ${({ width }) => (width ? width : "30px")};
  height: ${({ height }) => (height ? height : "30px")};
`;
