import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedData } from "../../../../../redux/countWorkSlice";
import { Wrapper } from "./styled";

const TextInput = ({ cansel, save }) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.countWork);

  const changeHandler = (e) => {
    dispatch(
      setSelectedData({
        ...selectedData,
        fullName: e.target.value,
      })
    );
  };
  return (
    <Wrapper>
      <Input value={selectedData.fullName} onChange={changeHandler} />
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
