import { useState } from "react";
import Modal from "antd/lib/modal";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
const AddModal = ({ show, onAdd, onCansel, disable }) => {
  const [product, setProduct] = useState("");
  return (
    <Modal
      title={"Add product"}
      open={show}
      okText="add"
      onOk={() => {
        onAdd(product);
        setProduct("");
      }}
      okButtonProps={{ disabled: disable }}
      cancelButtonProps={{ disabled: disable }}
      closable={!disable}
      onCancel={onCansel}
      destroyOnClose
    >
      <Form layout="horizontal" autoComplete={"off"}>
        <Form.Item label="Product name">
          <Input value={product} onChange={(e) => setProduct(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { AddModal };
