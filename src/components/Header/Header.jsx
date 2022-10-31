import { Checkbox, DatePicker, Dropdown } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import settingsImg from "../../assets/settings.svg";
import {
  setCurrentDay,
  setCurrentMonthIndex,
  setCurrentView
} from "../../redux/appslice";
const dropdownMenu = (dispatch) => {
  const menuArray = ["Daily", "Weekly", "Monthly", "Yearly"];
  return (
    <div className='bg-white p-4'>
      {menuArray.map((menu, i) => (
        <p
          className='py-2 cursor-pointer capitalize text-2xl text-gray-500'
          key={i}
          onClick={() => {
            dispatch(setCurrentView(menu));
          }}
        >
          {menu}
        </p>
      ))}
    </div>
  );
};
const configMenu = () => {
  const configArray = [
    "Price",
    "Popular Days",
    "Low booking probability",
    "Bloccked hours",
  ];
  return (
    <div className='bg-white p-4'>
      {configArray.map((config) => (
        <div className="cursor-pointer">
          
          <Checkbox />
          {config}
        </div>
      ))}
    </div>
  );
};
const Header = () => {
  const dispatch = useDispatch();
  const { currentMonthIndex, currentView, currentDay } = useSelector(
    (state) => state.app
  );
  const [currentTime, setCurrentTime] = useState(
    dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")
  );
  const [openDatePicker, setOpenDatePicker] = useState(false);
  function handleToday() {
    switch (currentView) {
      case "Monthly":
        dispatch(
          setCurrentMonthIndex(
            currentMonthIndex === dayjs().month()
              ? currentMonthIndex + Math.random()
              : dayjs().month()
          )
        );
        break;
      case "Daily":
        const day = dayjs().day();
        dispatch(setCurrentDay(dayjs().day(day)));
        break;
      default:
        break;
    }
  }
  function handlePrev() {
    switch (currentView) {
      case "Monthly":
        dispatch(setCurrentMonthIndex(currentMonthIndex - 1));
        break;
      case "Daily":
        dispatch(setCurrentDay(currentDay.add(-1, "day")));
        break;
      default:
        break;
    }
  }
  function handleNext() {
    switch (currentView) {
      case "Monthly":
        dispatch(setCurrentMonthIndex(currentMonthIndex + 1));
        break;
      case "Daily":
        dispatch(setCurrentDay(currentDay.add(1, "day")));
        break;
      default:
        break;
    }
  }
  function handleChangeDate(e) {
    dispatch(setCurrentDay(new Date(e)));
    dispatch(setCurrentView("Daily"));
    setCurrentTime(e.format("D MMMM, YYYY"));
    setOpenDatePicker(false);
  }
  return (
    <header className='flex font-poppins  font-semibold   px-16 py-6 items-center justify-between border-b border-[#DEDEE3]'>
      <p className='text-4xl'>
        EmCal <span>App</span>
      </p>
      <div className='flex align-center'>
        <button onClick={handleToday} className='border rounded py-2 px-4 mr-5'>
          Today
        </button>
        <button onClick={handlePrev}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_left
          </span>
        </button>
        <button onClick={handleNext}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_right
          </span>
        </button>
        {/* <Dropdown overlay={monthDropdownMenu(currentMonthIndex)}> */}
        <div className='ml-8 flex items-center cursor-pointer'>
          <p
            onClick={() => setOpenDatePicker(!openDatePicker)}
            className='flex items-center'
          >
            {currentTime}
            <span className='material-icons-outlined'>keyboard_arrow_down</span>
          </p>
          <span
            className='invisible w-3'
            onClickAway={() => setOpenDatePicker(false)}
          >
            <DatePicker
              onChange={handleChangeDate}
              open={openDatePicker}
              showToday
            />
          </span>
        </div>
        {/* </Dropdown> */}
        <Dropdown overlay={dropdownMenu(dispatch)}>
          <p className='flex items-center border border-slate-700 py-1 px-4 rounded-lg cursor-pointer'>
            {currentView}
            <span className='material-icons-outlined'>keyboard_arrow_down</span>
          </p>
        </Dropdown>

        <Dropdown overlay={configMenu()}>
          <p className='flex items-center pl-6 cursor-pointer'>
            <img src={settingsImg} alt='settings' width='20px' />
          </p>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
