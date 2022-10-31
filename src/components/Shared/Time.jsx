import React from "react";
import Hourslot from "./Hourslot";
import Minuteslot from "./Minuteslot";
export default function Time({ currentWeek, index }) {
  return (
    <div className='text-xl'>
      <div className='flex items-end'>
        <Hourslot hour={index} key={index + 2} />
        <Minuteslot current={currentWeek} index={index} />
      </div>
    </div>
  );
}
