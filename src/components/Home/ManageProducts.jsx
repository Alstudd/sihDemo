import React from "react";
import "../../css/hero.css";

export default function ManageProducts() {
  return (
    <div className="relative xl:mb-[12.8rem] mb-16  sm:pr-0 pr-8">
      <img
        className="md:block hidden absolute xl:-top-1 -top-[35rem] left-[3.97rem]"
        src="/Home/Line5.svg"
        alt=""
      />
      <img className="absolute top-14 left-[1.9rem]" src="/Home/Ellipse4.svg" alt="" />
      <div className="flex flex-col gap-6 sm:ml-24 ml-0 2xl:w-[80rem] xl:w-[72.5rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full">
        <h1 className="pt-16 lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:ml-0 ml-24 sm:w-full w-[17rem]">
          Manage Your <span className="gradText1">Products</span>
        </h1>
        <p className="ml-10 text-xl font-medium text-[#616161] sm:w-full w-[17rem]">Get Business Insights Tools, Manage Your Products, Export With DNK</p>
        <img className="ml-8" src="/Home/manageProd.svg" alt="" />
      </div>
      <img className="xl:block hidden absolute -bottom-[1.5rem] left-16" src="/Home/Line6.svg" alt="" />
      <img className="lg:block hidden absolute xl:-bottom-[10.1rem] -bottom-28 xl:right-[49.2rem] right-[94.2%]" src="/Home/Line7.svg" alt="" />
      <img className="xl:hidden lg:block hidden absolute -bottom-60 right-[94.2%]" src="/Home/Line7.svg" alt="" />
      <img className="lg:block hidden absolute xl:-bottom-[11rem] -bottom-28 xl:right-[48.8rem] right-[93.5%]" src="/Home/Ellipse5.svg" alt="" />
    </div>
  );
}
