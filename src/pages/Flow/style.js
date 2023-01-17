import styled from "styled-components";

export const Wrapper = styled.div``;

Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
  text-align: center;
`;

Wrapper.CardsContainer = styled.div`
  width: 700px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column-gap: 100px;
`;
