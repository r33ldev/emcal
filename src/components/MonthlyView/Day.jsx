import { Radio } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openEventModal, setSelectedDay } from "../../redux/appslice";
import { getCurrentDay } from "../../utils/utility";
import popularDateImg from "../../assets/popularDate.svg";
import lowBookingRatioImg from "../../assets/lowBookingRatio.svg";
const Day = ({ day }) => {
  const dispatch = useDispatch();
  const handleSelectADay = (e) => {
    dispatch(setSelectedDay(day));
    dispatch(openEventModal());
  };
  const {selectedDay} = useSelector((state)=>state.app)
  const [showAddButton, setShowAddButton] = useState(false);
  const onChange = () => {};
  return (
    <div
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
      className={`border  ${getCurrentDay(
        day
      )} font-poppins  text-xl font-semibold flex flex-col items-center justify-center relative`}
    >
      <header className={`flex flex-col items-center`}>
        <p className='absolute top-2 right-2 flex gap-5'>
          <img src={lowBookingRatioImg} alt='low booking ratio' width='10px' />
          <img src={popularDateImg} alt='popular dates' width='14px' />
        </p>
        <p className={` p-1 my-1  text-center`}>{day.format("DD")}</p>
        <p className='absolute bottom-0 right-0'>
          <Radio onChange={onChange} />
        </p>
        {showAddButton && (
          <p
            className='absolute bottom-[-.1rem] text-center cursor-pointer bg-[#0E689D] rounded-t-[5rem] py-3 px-5 duration-1000'
            onClick={handleSelectADay}
          >
            <span className='material-icons-outlined cursor-pointer text-[#FFFFFF] font-light text-3xl'>
              add
            </span>
          </p>
        )}
      </header>
    </div>
  );
};
export default Day;
