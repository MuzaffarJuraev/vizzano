import React, { useState } from "react";
import ShapeSvg from "../Generic/ShapeSVG/ShapeSVG";
import login_icon from "../../assets/icons/login_icon.jpg";
import { Wrapper } from "./style";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { setToken } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ fullName: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [playWarningAnimation, setPlayWarningAnimation] = useState(false);

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const customNotification = ({ type, message, placement, description }) => {
    notification[type]({
      message,
      placement,
      description,
    });
  };

  const handleWarningAnimation = () => {
    setPlayWarningAnimation(true);
    setTimeout(() => {
      setPlayWarningAnimation(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAuth();
    }
  };
  const onAuth = () => {
    if (!userInfo.fullName || !userInfo.password) {
      handleWarningAnimation();
      customNotification({
        type: "error",
        message: "You have to fill all inputs!",
        placement: "topRight",
      });
      return;
    }
    setLoading(true);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/user/login`,
      data: userInfo,
    })
      .then((res) => {
        setLoading(false);
        dispatch(setToken({ token: res.data.data.token }));
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("fullName", res.data.data.user.fullName);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        handleWarningAnimation();
        if (error.request.status >= 500) {
          customNotification({
            type: "error",
            message: "ERROR",
            placement: "topRight",
            description: "Server is not working!",
          });
        } else {
          customNotification({
            type: "error",
            message: "ERROR",
            placement: "topRight",
            description: error.response.data.extraMessage,
          });
        }
      });
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left>
          <Wrapper.LoginGif />
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            top={"0"}
            left={"0"}
          />
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            bottom={"0"}
            right={"0"}
          />
        </Wrapper.Left>
        <Wrapper.Right>
          <Wrapper.RightContainer>
            <Wrapper.LoginIcon src={login_icon} />
            <Wrapper.Title>Hello again!!!</Wrapper.Title>
            <Wrapper.Desc>
              Every day we try to sew with the best for you 😊. Vizzano has been
              with you for over 10 years. 😎 🙃
            </Wrapper.Desc>
            <Wrapper.Input
              onChange={onChange}
              name={"fullName"}
              placeholder="Name"
            />
            <Wrapper.InputPassword
              onChange={onChange}
              name={"password"}
              placeholder="Password"
              onKeyDown={handleKeyDown}
            />
            <Wrapper.Button
              onClick={onAuth}
              warningAnimation={playWarningAnimation}
            >
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
