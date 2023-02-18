import { Wrapper } from "./style";
import InputNumber from "antd/lib/input-number";
import Button from "antd/lib/button";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedData } from "../../../../../redux/countWorkSlice";

const NumberInput = ({ type, save, cansel }) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.countWork);

  const onChangeHandler = (changeType) => {
    if (type === "fake") {
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
    } else {
      if (changeType === "minus") {
        dispatch(
          setSelectedData({
            ...selectedData,
            price: selectedData.price - 1,
          })
        );
      } else {
        dispatch(
          setSelectedData({
            ...selectedData,
            price: selectedData.price + 1,
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
          value={type === "price" ? selectedData.price : selectedData.fake}
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
