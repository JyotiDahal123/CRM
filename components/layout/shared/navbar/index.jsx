import Link from "next/link";
import React, { useState } from "react";
import SignIn from "./signin";
import Signup from "./signup";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openin, setOpenin] = useState(false);

  const router = useRouter();
  const currentURL = router.pathname;

  return (
    <>
      <div className="bg-purple-600">
        <nav className="w-9/12 m-auto text-white p-5 flex justify-between items-center">
          <Link href="/">CRM</Link>
          {currentURL === "/" ? (
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  onClick={() => setOpen(true)}
                  className="py-[4px] rounded-3xl px-3 border-[1px] border-white hover:bg-purple-500"
                  href="/"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpenin(true)}
                  className="py-[4px] rounded-3xl px-3 border-[1px] border-white hover:bg-purple-500"
                  href="/"
                >
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  onClick={() => setOpenin(true)}
                  className="py-[4px] rounded-3xl px-3 border-[1px] border-white hover:bg-purple-500"
                  href="/"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <Signup open={open} setOpen={setOpen} />
      <SignIn openin={openin} setOpenin={setOpenin} />
      <section className="min-h-screen">{children}</section>
      <footer className="bg-purple-500 p-4 text-white text-center">
        <h1 className="text-xl">Footer</h1>
      </footer>
    </>
  );
};
export default Layout;
