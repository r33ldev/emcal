import React from "react";
import Hourslot from "./Hourslot";
import Minuteslot from "./Minuteslot";
export default function Time({ time }) {
  return (
    <div className='text-xl' style={{ height: "calc(80vh)" }}>
      <div className=''>
        {time.map((row, i) => (
          <div className='flex gap-3 items-start'>
            <Hourslot hour={i + 1} key={i} />
            <div
              key={i}
              style={{
                width: "100%",
                background: "#F5F6F9",
                // marginTop: ".5rem",
                // height: '2rem'
                marginTop: `${i === 0 && ".4rem"}`,
              }}
            >
              {row.map((min, idx) => (
                <Minuteslot min={min} key={idx} hour={i+1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
