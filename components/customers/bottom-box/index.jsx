import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import DateTime from "./date-time";
import Note from "./note";
import Notification from "./notification";
const BottomBox = ({ openBox, setOpenBox }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // note open or close
  const [openNote, setOpenNote] = useState(false);
  const [data, setData] = useState({});

  // getting data from local storage
  useEffect(() => {
    const objectString = localStorage.getItem("customerData");
    if (objectString) {
      const parsedData = JSON.parse(objectString);
      setData(parsedData);
    }
  }, [openBox]);

  //for timer
  useEffect(() => {
    let interval;

    if (openBox) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000); // Update seconds every second
    } else {
      clearInterval(interval);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [openBox]);

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds >= 3600) {
      const remainingHours = Math.floor(totalSeconds / 3600);
      totalSeconds -= remainingHours * 3600;
      setHours(remainingHours);
    }

    if (totalSeconds >= 60) {
      const remainingMinutes = Math.floor(totalSeconds / 60);
      totalSeconds -= remainingMinutes * 60;
      setMinutes(remainingMinutes);
    }

    setSeconds(totalSeconds);
  }, [seconds]);

  return (
    <>
      <Modal footer={null} closable={false} open={openBox} width={1000}>
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-6">Customer Details</h2>
          <div className="flex justify-between">
            <div className="text-lg flex flex-col gap-2">
              <p>
                Name:{" "}
                <span className="font-semibold text-gray-500">{data.name}</span>
              </p>
              <p>
                Email:{" "}
                <span className="font-semibold text-gray-500">
                  {data.email}
                </span>
              </p>
              <p>
                Mobile:{" "}
                <span className="font-semibold text-gray-500">
                  {data.mobile}
                </span>
              </p>
            </div>

            <div className="text-lg">
              <p>
                Timer:{" "}
                <span className="font-bold text-xl">
                  {`${hours < 10 ? `0${hours}` : hours}:${
                    minutes < 10 ? `0${minutes}` : minutes
                  }:${seconds < 10 ? `0${seconds}` : seconds}`}
                </span>
              </p>
            </div>
            <div>
              <Button
                className="flex justify-center items-center gap-1 text-blue-600 border border-blue-600"
                onClick={() => setOpenNote(true)}
              >
                <i class="bx bx-pencil"></i> <span>Note</span>
              </Button>
              <Note
                openNote={openNote}
                setOpenNote={setOpenNote}
                value="bottom"
              />
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <Notification openBox={openBox} setOpenBox={setOpenBox} />
            <div className="flex gap-4 text-lg items-center">
              <p className="">Follow up: </p> <DateTime />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BottomBox;
