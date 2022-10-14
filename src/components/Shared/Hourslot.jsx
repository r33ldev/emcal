import React from "react";
const Hourslot = ({ hour }) => {
  const formattedHour = hour > 12 ? `${hour - 12}PM` : `${hour}AM`;
  return (
    <p className={` pl-8 my-1 text-xl w-[4rem] mb-[-.8rem]`}>{formattedHour}</p>
  );
};
export default Hourslot;
