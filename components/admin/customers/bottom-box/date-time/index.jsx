import React from "react";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";

const DateTime = () => {
  return (
    <Space direction="vertical">
      <div className="flex ">
        <DatePicker />
        <TimePicker status="success" />
      </div>
    </Space>
  );
};
export default DateTime;
