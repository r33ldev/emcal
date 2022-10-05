import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
const Minuteslot = ({ current, index }) => {
  console.log("something: ", current, index);
  // let showHighlight;
  const [showHighlight, setShowHighlight] = useState(false);
  function highlight() {
    const isHour = dayjs().hour() === index - 1;
    // const isMinute = Math.round(dayjs().minute() / 10) === min;
    const isMinute = true;
    const isCurrentDay = true;
    return isHour && isMinute && isCurrentDay;
  }
  useEffect(() => {
    setShowHighlight(highlight());
  });
  setInterval(() => {
    setShowHighlight(highlight());
  }, 60000);
  return (
    <div className='ml-[3.2rem] flex justify-between text-center w-full'>
      {current.map((currentDay, idx) => (
        <p className='border border-[#e5e7eb40] w-full py-14  items-center justify-center cursor-pointer relative'>
          {currentDay.map((current, i) => (
            <div className='flex'>
              {/* {idx === 0 && i === 1 && (
                <>
                  <p className='rounded-full  h-[1rem] w-[1rem] bg-[blue] f-[9rem]'></p>
                </>
              )} */}
              {/* {i === 1 && (
                <p className='border border-black	 w-full h-full'>&nbsp;</p>
              )} */}
            </div>
          ))}
        </p>
      ))}
    </div>
  );
};
export default Minuteslot;
