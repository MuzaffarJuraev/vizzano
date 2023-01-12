import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, MenuItem } from "./style";
import { Dropdown } from "antd";
import logo from "../../assets/icons/navbarLogo.png";
import LogoutSVG from "../Generic/LogoutSVG";
import SettingsSVG from "../Generic/SettingsSVG";
import { confirm } from "../Generic/Notification/ByModal";
import ProfileModal from "../Login/ProfileModal";

const Navbar = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [showProfModal, setShowProfModal] = useState(false);
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <MenuItem onClick={() => setShowProfModal(true)}>
          <SettingsSVG width={"20px"} height={"20px"} />
          <MenuItem.Title>Settings</MenuItem.Title>
        </MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <MenuItem
          onClick={() => {
            setOpenConfirm(true);
            confirm({
              title: "Do you want to logout?",
              open: openConfirm,
              okButtonProps: { danger: true },
              okText: "Logout",
              onCancel: () => setOpenConfirm(false),
              onOk: () => {
                localStorage.clear();
                setOpenConfirm(false);
                navigate(0);
              },
            });
          }}
        >
          <LogoutSVG width={"15px"} height={"15px"} colour={"red"} />{" "}
          <MenuItem.Title colour>Logout</MenuItem.Title>
        </MenuItem>
      ),
      key: "1",
    },
  ];
  return (
    <Wrapper>
      <ProfileModal
        open={showProfModal}
        title={"Profile"}
        onCancel={() => setShowProfModal(false)}
      />
      <Wrapper.Container>
        <Wrapper.Logo src={logo} alt="logo" loading="lazy" />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Wrapper.Avatar>M</Wrapper.Avatar>
        </Dropdown>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Navbar;
