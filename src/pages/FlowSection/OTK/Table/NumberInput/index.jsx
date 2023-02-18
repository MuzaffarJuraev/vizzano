import { Wrapper } from "./style";
import InputNumber from "antd/lib/input-number";
import Button from "antd/lib/button";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedData } from "../../../../../redux/otkSlice";

const NumberInput = ({ type, save, cansel }) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const onChangeHandler = (changeType) => {
    if (type === "things") {
      if (changeType === "minus") {
        dispatch(
          setSelectedData({
            ...selectedData,
            things: selectedData.things - 1,
          })
        );
      } else {
        dispatch(
          setSelectedData({
            ...selectedData,
            things: selectedData.things + 1,
          })
        );
      }
    } else {
      if (changeType === "minus") {
        dispatch(
          setSelectedData({
            ...selectedData,
            fake: selectedData.fake - 1,
          })
        );
      } else {
        dispatch(
          setSelectedData({
            ...selectedData,
            fake: selectedData.fake + 1,
          })
        );
      }
    }
  };

  const inputChangeHandler = (num) => {
    if (num) {
      dispatch(
        setSelectedData({
          ...selectedData,
          [type]: num,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Wrapper.InputConainer>
        <Button onClick={() => onChangeHandler("plus")}>+</Button>
        <InputNumber
          onChange={(num) => inputChangeHandler(num)}
          value={type === "things" ? selectedData.things : selectedData.fake}
        />
        <Button danger onClick={() => onChangeHandler("minus")}>
          -
        </Button>
      </Wrapper.InputConainer>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={save}>
          Save
        </Button>
        <Button danger onClick={cansel}>
          Cansel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export { NumberInput };
