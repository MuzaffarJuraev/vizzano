import { useState } from "react";
import Modal from "antd/lib/modal";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
const AddMemberModal = ({
  onAddHandler,
  showModal,
  setShowModal,
  disableModal,
}) => {
  const [user, setUser] = useState({ name: "", surname: "" });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const addHandler = () => {
    onAddHandler(user);
    setUser({ name: "", surname: "" });
  };
  return (
    <Modal
      open={showModal}
      title="Add a new merchant"
      confirmLoading={disableModal}
      okButtonProps={{ disabled: disableModal }}
      cancelButtonProps={{ disabled: disableModal }}
      closable={!disableModal}
      okText={"Add"}
      onOk={addHandler}
      destroyOnClose={true}
      onCancel={() => {
        setShowModal(false);
      }}
    >
      <Form layout="vertical" autoComplete="off">
        <Form.Item label="Name:">
          <Input
            placeholder="name"
            value={user.name}
            name={"name"}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Item>
        <Form.Item label="Surname:">
          <Input
            placeholder="surname"
            value={user.surname}
            name={"surname"}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { AddMemberModal };
