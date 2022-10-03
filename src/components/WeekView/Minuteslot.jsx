import dayjs from "dayjs";
import React from "react";
const Minuteslot = ({ min, hour }) => {
  const isHour = dayjs().hour() === hour;
  const isMinute = dayjs().minute() === min;
  const isCurrentDay = true;
  const showHighlight = isHour && isMinute && isCurrentDay;
  return (
    <div
      style={{
        height: `${showHighlight ? ".2rem" : "0rem"}`,
        background: `${showHighlight ? "blue" : "transparent"}`,
        borderBottom: `${min === 0 && "1px solid red"}`,
        padding: ".1rem 0",
      }}
    >
      {showHighlight && (
        <p className='rounded-full h-[1rem] w-[1rem] bg-[blue] f-[9rem] mt-[-.4rem]'>
          &nbsp;
        </p>
      )}
    </div>
  );
};
export default Minuteslot;
