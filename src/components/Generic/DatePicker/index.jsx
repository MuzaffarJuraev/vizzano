import React, { useState } from "react";
import { DatePicker } from "antd";
import { Wrapper, iconStyle } from "./style";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const DatePickerComponent = ({ prefixTime, dateChange }) => {
  const currentDate = new Date(prefixTime);
  const [showDate, setShowDate] = useState(true);
  const dateSetting = new Date();
  const dateNow = Number(
    new Date(
      dateSetting.getFullYear(),
      dateSetting.getMonth(),
      dateSetting.getDate()
    ).getTime()
  );
  const startingDate = Number(process.env.REACT_APP_STARTING_DATE);

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
    setShowDate(true);
    dateChange(new Date(date.$d).getTime());
  };
  return (
    <Wrapper>
      {startingDate < prefixTime - 86400000 && (
        <CaretLeftOutlined style={iconStyle} onClick={dayMinus} />
      )}
      {showDate ? (
        <Wrapper.DateTitle onClick={() => setShowDate(false)}>
          {dateFormatter(prefixTime)}
        </Wrapper.DateTitle>
      ) : (
        <DatePicker
          open={!showDate}
          onSelect={pickerChangeHandler}
          disabledDate={(date) => {
            const antDate = new Date(date.$d);
            if (
              startingDate <= Number(antDate.getTime()) &&
              Number(antDate.getTime()) <=
                Number(dateSetting.getTime()) + 86400000
            ) {
              return false;
            } else {
              return true;
            }
          }}
        />
      )}
      {prefixTime < dateNow && (
        <CaretRightOutlined style={iconStyle} onClick={dayPlus} />
      )}
    </Wrapper>
  );
};

export default DatePickerComponent;
