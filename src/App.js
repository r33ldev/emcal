import dayjs from 'dayjs';
import React from 'react';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import EventModal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
export default function App() {
  const localeData = require('dayjs/plugin/localeData');
  dayjs.extend(localeData);
  const {eventModalIsOpen} = useSelector((state) => state.app)
  return (
    <>
      {eventModalIsOpen && <EventModal />}
      <div className='w-full h-screen '>
        <Header />
        <Calendar />
      </div>
    </>
  );
}
