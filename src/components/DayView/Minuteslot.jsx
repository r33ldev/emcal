import dayjs from "dayjs";
import React from "react";
const Minuteslot = ({ min, hour }) => {
  const isHour = dayjs().hour() === hour;
  const isMinute = Math.round(dayjs().minute()) / 2 === min;
  return (
    <div
      style={{
        height: `${isHour && isMinute ? ".2rem" : "0rem"}`,
        background: `${isHour && isMinute ? "blue" : "transparent"}`,
        borderBottom: `${min === 0 && "1px solid red"}`,
        padding: ".1rem 0",
      }}
    >
      {isHour && isMinute && (
        <p
          style={{
            borderRadius: "50%",
            height: "1rem",
            width: "1rem",
            background: "blue",
            fontSize: "9rem",
          }}
        >
          &nbsp;
        </p>
      )}
    </div>
  );
};
export default Minuteslot;
