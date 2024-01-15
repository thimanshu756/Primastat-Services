import React, { useState } from "react";
import {openCalendly} from "./calendlyLogic";
export default function Calendly() {
  return (
    <div className="md:w-[40vw] flex-1 flex justify-center items-center flex-col md:ml-8">
      <p className="text-black text-center font-roboto text-2xl font-semibold leading-10">
        Schedule a call with us
      </p>
      <button
     
     onClick={openCalendly}
        className="bg-[#00114D] text-white rounded px-4 py-2 border border-transparent hover:bg-blue-800 mt-[15vh]"
        style={{ borderRadius: "7px" }}
      >
        Schedule Call
      </button>

    </div>
  );
}
