import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const month = dayjs().month();
const year = dayjs().year();
// const week = dayjs().week()
const initialState = {
  data: {},
  currentMonthIndex: month,
  currentWeekIndex: 0,
  selectedDay: null,
  eventModalIsOpen: false,
  eventDetails: {},
  currentView: "Monthly",
  currentYearIndex: year
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppData(state, action) {
      state.data = action.payload;
    },
    clearAppData(state) {
      state.data = {};
    },
    setCurrentMonthIndex(state, action) {
      state.currentMonthIndex = action.payload;
    },
    setCurrentYearIndex(state, action) {
      state.currentYearIndex = action.payload;
    },
    setCurrentWeekIndex(state, action) {
      state.currentWeekIndex = action.payload;
    },
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
    openEventModal(state) {
      state.eventModalIsOpen = true;
    },
    closeEventModal(state) {
      state.eventModalIsOpen = false;
    },
    setEventDetails(state,action) {
      state.eventDetails = action.payload
    },
    setCurrentView(state,action){
      state.currentView = action.payload
    }
  },
});

export const {
  setCurrentMonthIndex,
  setCurrentWeekIndex,
  setSelectedDay,
  openEventModal,
  closeEventModal,
  setEventDetails,
  setCurrentView,
  setCurrentYearIndex,
} = appSlice.actions;
export default appSlice.reducer;
