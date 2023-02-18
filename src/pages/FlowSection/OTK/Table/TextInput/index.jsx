import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedData } from "../../../../../redux/otkSlice";
import { Wrapper } from "./styled";
const TextInput = ({ cansel, save }) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);

  const changeHandler = (e) => {
    dispatch(
      setSelectedData({
        ...selectedData,
        productName: e.target.value,
      })
    );
  };
  return (
    <Wrapper>
      <Input value={selectedData.productName} onChange={changeHandler} />
      <Wrapper.ButtonWrapper>
        <Button type="primary" onClick={save}>
          Save
        </Button>
        <Button danger onClick={cansel}>
          Cansel
        </Button>
      </Wrapper.ButtonWrapper>
    </Wrapper>
  );
};

export { TextInput };
