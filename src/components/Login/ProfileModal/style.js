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
`;
Wrapper.FormLabel = styled.label`
  display: block;
  margin-top: 15px;
`;
Wrapper.FormInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  border: 1px solid grey;
  background-color: gold;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

Wrapper.VersionCont = styled.p``;
