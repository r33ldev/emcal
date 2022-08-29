import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { openEventModal, setSelectedDay } from '../../redux/appslice';
const Day = ({ day }) => {
  const dispatch = useDispatch();
  // const [selectDay, setSelectDay] = useState();
  function getCurrentDay() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'border-blue-600 text-blue-600'
      : ' border-gray-200';
  }
  const handleSelectADay = (e) => {
    // setSelectDay(day);
    dispatch(setSelectedDay(day));
    dispatch(openEventModal());
  };
  // useEffect(() => {
  //   if (selectDay) {
      
  //   }
  // }, [selectDay, day, dispatch]);
  const onChange = () => {};
  return (
    <div
      onClick={handleSelectADay}
      className={`border  ${getCurrentDay()} flex flex-col items-center justify-center cursor-pointer relative`}
    >
      <header className={`flex flex-col items-center`}>
        <p className={` p-1 my-1 text-2xl text-center`}>
          {day.format('DD')}
        </p>
        <p className='absolute bottom-0 right-0'>
          <Checkbox onChange={onChange} />
        </p>
      </header>
    </div>
  );
};
export default Day;
