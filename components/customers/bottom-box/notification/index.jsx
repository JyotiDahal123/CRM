import React from "react";
import { Button, Space, notification } from "antd";
const Notification = ({ openBox, setOpenBox }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: <span className="text-red-600">Your Call Ended !</span>,
      icon: <i className="bx bx-phone-off text-red-600"></i>,
      placement,
    });
  };

  const onclick = () => {
    setOpenBox(false);
    openNotification("bottomRight");
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button
          className="bg-red-600 text-white px-2 flex justify-center items-center gap-1 hover:bg-red-500"
          type="primary"
          onClick={onclick}
        >
          <i class="bx bx-phone-off"></i> <span>End Call</span>
        </Button>
      </Space>
    </>
  );
};
export default Notification;
