import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
`;
Wrapper.Avatar = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: orangered;
  color: #ffffff;
  font-size: 20px;
`;
Wrapper.Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;
Wrapper.InputWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;
`;
Wrapper.FormLabel = styled.label`
  margin-top: 15px;
`;
Wrapper.Input = styled(Input)``;
Wrapper.InputPassword = styled(Input.Password)``;

Wrapper.VersionCont = styled.p``;
