import React from "react";
import StationsList from "./StationsList";

export default function Station() {
  return (
    <div className="station-lay pl-6 pt-6 pr-3 pb-6  rounded-[32px] overflow-hidden h-[620px]">
      <h2 className="text-4xl font-black text-white mb-5 tracking-tight">
        {" "}
        All stations
      </h2>
      <StationsList />
    </div>
  );
}
