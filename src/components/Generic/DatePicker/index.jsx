import React, { useState } from "react";
import { DatePicker } from "antd";
import { Wrapper, iconStyle } from "./style";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const DatePickerComponent = ({ prefixTime, dateChange }) => {
  const currentDate = new Date(prefixTime);
  const [showDate, setShowDate] = useState(true);

  const dayPlus = () => {
    dateChange(
      new Date(currentDate.setDate(currentDate.getDate() + 1)).getTime()
    );
  };

  const dayMinus = () => {
    dateChange(
      new Date(currentDate.setDate(currentDate.getDate() - 1)).getTime()
    );
  };

  const dateFormatter = (prefixTime) => {
    return new Date(prefixTime).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };
  const pickerChangeHandler = (date) => {
    dateChange(new Date(date.$d).getTime());
    setShowDate(true);
  };
  return (
    <Wrapper>
      <CaretLeftOutlined style={iconStyle} onClick={dayMinus} />
      {showDate ? (
        <Wrapper.DateTitle onClick={() => setShowDate(false)}>
          {dateFormatter(prefixTime)}
        </Wrapper.DateTitle>
      ) : (
        <DatePicker open onSelect={pickerChangeHandler} />
      )}
      <CaretRightOutlined style={iconStyle} onClick={dayPlus} />
    </Wrapper>
  );
};

export default DatePickerComponent;
