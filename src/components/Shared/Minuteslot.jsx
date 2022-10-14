import React from "react";
import EventHighlight from "../WeeklyView/EventHighlight";
const  Minuteslot = ({ current, index }) => {
  const events = [
    [2, 4],
    [5, 1],
    [14, 2],
  ];
  return (
    <div className='ml-[3.2rem] flex justify-between text-center w-full'>
      {current.map((x, idx) => {
        const currentRow = [index, idx];
        const eventExists = events.map((val) => {
          return String(val) === String(currentRow);
        });
        return (
          <p className='border border-[#e5e7eb50] w-full  justify-center cursor-pointer relative'>
            {/* <p className='border border-b-[#0E689D50] border-x-0'> // show realtime minutes of hours */}
              {/* &nbsp;
            </p> */}
            <EventHighlight eventExists={eventExists.includes(true)} />
          </p>
        );
      })}
    </div>
  );
};
export default Minuteslot;
