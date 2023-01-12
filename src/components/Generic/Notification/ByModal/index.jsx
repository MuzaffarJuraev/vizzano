import { Modal } from "antd";

const confirm = ({
  title,
  openConfirm,
  okText,
  onOk,
  onCancel,
  okButtonProps,
}) => {
  Modal.confirm({
    title,
    open: openConfirm,
    okText,
    okButtonProps,
    onCancel,
    onOk,
  });
};

export { confirm };
