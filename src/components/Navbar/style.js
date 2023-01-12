import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  height: 70px;
`;

Wrapper.Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Wrapper.Logo = styled.img`
  width: 102px;
  height: 100%;
`;

Wrapper.Avatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: orangered;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
MenuItem.Title = styled.div`
  margin: 0 0 0 8px;
  color: ${({ colour }) => (colour ? "red" : "black")};
`;
