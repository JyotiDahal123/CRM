import React, { useState } from "react";
import { Modal } from "antd";

const Note = ({ openNote, setOpenNote }) => {
  const [input, setInput] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputArray((prev) => [...prev, input]);
    setInput("");
  };
  return (
    <>
      <Modal
        title="Write Note"
        centered
        open={openNote}
        onCancel={() => setOpenNote(false)}
        footer={[
          <button
            className="py-2 px-4 rounded-lg hover:bg-slate-600 bg-slate-700 text-white"
            onClick={() => setInputArray([])}
          >
            clear
          </button>,
        ]}
      >
        <div className="p-4">
          <form onSubmit={submitHandler} className=" flex justify-between">
            <input
              type="text"
              value={input}
              placeholder="write your note..."
              className="border w-10/12 outline-none shadow  p-1 px-2 rounded-l-lg"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 w-20 text-white py-2 border font-semibold px-4 rounded-r-lg shadow-md hover:bg-blue-500"
            >
              Add
            </button>
          </form>
        </div>
        <div className="px-4 text-[16px]">
          {inputArray &&
            inputArray.map((item, index) => (
              <p className="mt-2" key={index}>
                <i className="bx bxs-hand-right text-gray-400"></i>  {item}
              </p>
            ))}
        </div>
      </Modal>
    </>
  );
};
export default Note;
