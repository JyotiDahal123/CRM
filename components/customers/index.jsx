import Layout from "../layout/shared/navbar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("New Customer", "sub1", <UserAddOutlined />, null, "item"),
  getItem("Old Customer", "sub2", <TeamOutlined />),
];

const Customers = () => {
  const router = useRouter(); // Define the router instance here
  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    if (e.key === "sub1") return router.push("/customers/new-customer");
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Menu
        className="min-h-screen w-64 text-xl py-4 bg-slate-600"
        onClick={onClick}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        theme="dark"
      />
    </Layout>
  );
};

export default Customers;
