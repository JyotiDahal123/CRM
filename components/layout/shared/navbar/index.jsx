import Link from "next/link";
import React, { useState } from "react";
import SignIn from "./signin";
import Signup from "./signup";
import { useRouter } from "next/router";
import { UserAddOutlined, HomeOutlined, TeamOutlined } from "@ant-design/icons";
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

const Layout = ({ children }) => {
  const [current, setCurrent] = useState("1");
  const [open, setOpen] = useState(false);
  const [openin, setOpenin] = useState(false); // Add a state for login status
  const router = useRouter();
  const currentURL = router.pathname;

  const menuItems =
    currentURL === "/"
      ? [
          getItem(
            "Admin page",
            "sub1",
            <HomeOutlined style={{ fontSize: "24px" }} />,
            null,
            "item"
          ),
        ]
      : [
          getItem(
            "Customers",
            "sub2",
            <TeamOutlined style={{ fontSize: "24px" }} />,
            null,
            "item"
          ),
          getItem(
            "New customer",
            "sub3",
            <UserAddOutlined style={{ fontSize: "24px" }} />,
            null,
            "item"
          ),
        ];

  const onClick = (e) => {
    if (e.key === "sub3") {
      router.push("/customers/new-customer");
    }
    if (e.key === "sub2") return router.push("/customers");
    setCurrent(e.key);
  };

  return (
    <>
      <div className="bg-purple-600">
        <nav className="w-9/12 m-auto text-white p-5 flex justify-between items-center">
          <h2>
            <i className="bx bxs-leaf text-2xl"></i>
            <span className="text-xl font-semibold tracking-widest ml-2">
              CRM
            </span>
          </h2>
          {currentURL === "/" ? (
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(true)}
                  className="py-[4px] flex justify-center items-center gap-1  px-3 bg-purple-500 border rounded-md text-white"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => setOpenin(true)}
                  className="py-[4px] flex justify-center items-center gap-1  px-3 bg-purple-500 border rounded-md text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className="py-[4px] flex justify-center items-center gap-1  px-3 bg-purple-500 border rounded-md text-white"
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="py-[4px] flex justify-center items-center gap-1  px-3 bg-purple-500 border rounded-md text-white"
                  border
                >
                  <i class="bx bx-cog"></i>
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <Signup open={open} setOpen={setOpen} />
      <SignIn openin={openin} setOpenin={setOpenin} />
      <div className="flex">
        <Menu
          className="min-h-screen w-64 text-xl py-4 bg-slate-500 text-white"
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={menuItems}
          theme="dark"
        />
        <section className="min-h-screen">{children}</section>
      </div>

      <footer className="bg-purple-500 p-4 text-white text-center">
        <h1 className="text-xl">Footer</h1>
      </footer>
    </>
  );
};

export default Layout;
