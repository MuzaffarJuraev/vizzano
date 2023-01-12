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
          <Wrapper.FormLabel>Name:</Wrapper.FormLabel>
          <Wrapper.FormInput />
          <Wrapper.FormLabel>Surname:</Wrapper.FormLabel>
          <Wrapper.FormInput />
        </Wrapper.Form>
        <Wrapper.VersionCont>Vizzano 0.0.1 version</Wrapper.VersionCont>
      </Wrapper>
    </Modal>
  );
};

export default ProfileModal;
