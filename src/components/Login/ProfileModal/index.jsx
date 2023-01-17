import React from "react";
import { Modal } from "antd";
import { Wrapper } from "./style";

const ProfileModal = ({ open, title, onCancel }) => {
  return (
    <Modal
      open={open}
      title={title}
      okButtonProps={{ disabled: true }}
      okText={"Save"}
      onCancel={onCancel}
    >
      <Wrapper>
        <Wrapper.Avatar>M</Wrapper.Avatar>
        <Wrapper.Form>
          <Wrapper.InputWrapper>
            <Wrapper.FormLabel>username:</Wrapper.FormLabel>
            <Wrapper.Input disabled value={localStorage.getItem("fullName")} />
          </Wrapper.InputWrapper>
          <Wrapper.InputWrapper>
            <Wrapper.FormLabel>password:</Wrapper.FormLabel>
            <Wrapper.InputPassword disabled />
          </Wrapper.InputWrapper>
        </Wrapper.Form>
        <Wrapper.VersionCont>Vizzano 0.0.1 version</Wrapper.VersionCont>
      </Wrapper>
    </Modal>
  );
};

export default ProfileModal;
