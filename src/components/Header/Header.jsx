import React from 'react';
import { Dropdown } from 'antd';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentMonthIndex } from '../../redux/appslice';

const dropdownMenu = () => {
  const menuArray = ['daily', 'weekly', 'monthly', 'yearly'];
  return (
    <div className='bg-white p-4'>
      {menuArray.map((menu, i) => (
        <p
          className='py-2 cursor-pointer capitalize text-2xl text-gray-500'
          key={i}
        >
          {menu}
        </p>
      ))}
    </div>
  );
};
const monthDropdownMenu = (currentMonthIndex) => {
  const months = dayjs.months();
  return (
    <div className='bg-white p-4'>
      {months.slice(currentMonthIndex + 1).map((month) => (
        <p className='py-2 cursor-pointer capitalize text-2xl text-gray-500 '>
          {/* {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')} */}
          {month}
        </p>
      ))}
    </div>
  );
};
const Header = () => {
  const dispatch = useDispatch();
  const { currentMonthIndex } = useSelector((state) => state.app);
  function handleToday() {
    dispatch(
      setCurrentMonthIndex(
        currentMonthIndex === dayjs().month()
          ? currentMonthIndex + Math.random()
          : dayjs().month()
      )
    );
  }
  function handlePrevMonth() {
    dispatch(setCurrentMonthIndex(currentMonthIndex - 1));
  }
  function handleNextMonth() {
    dispatch(setCurrentMonthIndex(currentMonthIndex + 1));
  }
  return (
    <header className='flex  px-16 py-6 items-center justify-between border-b border-[#DEDEE3]'>
      <p className='text-4xl'>
        EmCal <span>App</span>
      </p>
      <div className='flex align-center'>
        <button onClick={handleToday} className='border rounded py-2 px-4 mr-5'>
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_right
          </span>
        </button>
        <Dropdown overlay={monthDropdownMenu(currentMonthIndex)}>
          <p className='flex items-center mx-8 cursor-pointer'>
            {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
              'MMMM YYYY'
            )}
            <span className='material-icons-outlined'>keyboard_arrow_down</span>
          </p>
        </Dropdown>
        <Dropdown overlay={dropdownMenu}>
          <p className='flex items-center border border-slate-700 p-1 rounded-lg cursor-pointer'>
            Monthly
            <span className='material-icons-outlined'>keyboard_arrow_down</span>
          </p>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
