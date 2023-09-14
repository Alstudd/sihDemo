import React from "react";

export default function Footer() {
  return (
    <div className="bg-white p-10">
      <div className="flex xl:flex-row flex-wrap xl:gap-48 gap-24 items-start">
        <img className="h-[15rem]" src="/Home/Rectangle1.svg" alt="" />
        <div className="flex items-start flex-col gap-5">
          <img className="h-[4.25rem]" src="/Home/Rectangle2.svg" alt="" />
          <img className="h-[9.5rem]" src="/Home/Rectangle3.svg" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({length: 4}, (_, index) => {
            return <img className="h-[2.65rem]" key={index} src="/Home/Rectangle4.svg" alt="" />
          })}
        </div>
      </div>
    </div>
  );
}
