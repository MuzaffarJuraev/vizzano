import { Input } from "antd";
import styled from "styled-components";
import login_bg from "../../assets/images/login_bg.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

Wrapper.Container = styled.div`
  display: flex;
  height: 100%;
`;

Wrapper.Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f67cc;
  position: relative;
  @media (max-width: 1150px) {
    display: none;
  }
`;

Wrapper.LoginGif = styled.div`
  width: 65%;
  height: 65%;
  border-radius: 5px;
  background-image: url(${login_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

Wrapper.Right = styled.div`
  flex: 1;
  background-color: #ffffff;
`;

Wrapper.RightContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    width: 40%;
  }
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 520px) {
    width: 80%;
  }
`;

Wrapper.LoginIcon = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid rgb(243, 245, 248);
`;

Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: rgb(57, 56, 77);
`;

Wrapper.Desc = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
  font-weight: 300;
`;

Wrapper.Input = styled(Input)`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;

Wrapper.InputPassword = styled(Input.Password)`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;

Wrapper.Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: rgb(48, 104, 204);
  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 1s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
