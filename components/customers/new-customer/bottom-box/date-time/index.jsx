import React from "react";
import { DatePicker, Space } from "antd";

import { TimePicker } from "antd";

const DateTime = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">
      <div className="flex ">
        <DatePicker onChange={onChange} />
        <TimePicker status="error" />
      </div>
    </Space>
  );
};
export default DateTime;
