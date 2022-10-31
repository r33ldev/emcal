import React from "react";
// import avatar from "../../assets/avatar-1.png";
const EventHighlight = ({ eventExists }) => {
  return (
    <div
      className={`w-full border  border-[#e5e7eb50]  ${
        eventExists
          ? "bg-[#0E689D50] border-x-2 border-l-indigo-500"
          : "bg-#FFFFFF  border-x-0"
      } border-y-0 h-24 p-2 flex items-center justify-between`}
    >
      {/* <div className='flex gap-3'>
        <img src={avatar} alt='' />
        <p>James Cowel</p>
        <p>3 days @456/night</p>
      </div>
      <div>
        <p>Mon 1:30 AM - WED 4:30 PM</p>
        <p>3 Guests ongoing</p>
      </div>
      <div>
        <button>Booking Details</button>
      </div> */}
    </div>
  );
};

export default EventHighlight;
