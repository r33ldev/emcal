import React from "react";
import { Checkbox } from "antd";
import { format } from "date-fns";
import { getCurrentDay } from "../../utils/utility";
const Week = ({ currentWeek }) => {
  return (
    <>
      <div className=' ml-28  justify-center text-center font-poppins  text-5xl font-light  grid grid-cols-7 grid-rows-1'>
        {currentWeek.map((weekday) => {
          return (
            <div
              className={`flex flex-col  ${getCurrentDay(
                weekday
              )}  items-center py-1 justify-center cursor-pointer relative`}
            >
              <header className={`flex flex-col items-center`}>
                <p className={` p-1 my-1 text-2xl text-center`}>
                  <p className='text-xl'>
                    {new Date(weekday).toLocaleString("en-us", {
                      weekday: "long",
                    })}
                  </p>
                  <p>{format(new Date(weekday), "d")}</p>
                </p>
                <p className='absolute bottom-2 right-2'>
                  <Checkbox onChange={() => null} />
                </p>
              </header>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Week;
