import dayjs from 'dayjs';
import React from 'react';
import MonthCalendar from "./components/MonthView/MonthCalendar";
import Header from './components/Header/Header';
import EventModal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import DayCalendar from './components/DayView/DayCalendar';
export default function App() {
  const localeData = require('dayjs/plugin/localeData');
  dayjs.extend(localeData);
  const { eventModalIsOpen, currentView } = useSelector(
    (state) => state.app
  );
  return (
    <>
      {eventModalIsOpen && <EventModal />}
      <div className='w-full h-screen '>
        <Header />
        {currentView === "month" && <MonthCalendar />}
        {currentView === "day" && <DayCalendar />}
      </div>
    </>
  );
}
