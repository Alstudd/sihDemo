import React from "react";
import "../../css/hero.css";

export default function Hero() {
  return (
    <div>
      <div className="relative flex justify-center">
        <img
          className="mt-4 absolute z-10 md:w-auto sm:w-[22rem] w-full"
          src="/Home/HeroEllipseGrad.svg"
          alt="grad"
        />
      </div>
      <div className="flex flex-col items-center gap-7">
        <div className="md:mt-24 mt-14 flex flex-col items-center gap-4">
          <h1 className="text-center lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
            Your Gateway to International Trade{" "}
            <span className="gradText1 leading-snug">Begins Here</span>
          </h1>
          <p className="text-center md:text-xl text-base font-medium text-[#616161] lg:w-[46rem] md:w-[35rem] w-[15rem]">
            Join Our Government Backed Platform, Empowering Small Businesses on
            the Global Stage. Use our Platform For your Benefits and be the next
            Unicorn.
          </p>
        </div>
        <div className="z-10 flex h-11 justify-between rounded-2xl bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <button>
            <a href="#" className="px-4 py-2 text-base font-normal">
              Get Started
            </a>
          </button>
          <a href="#">
            <img
              className="rounded-tr-2xl rounded-br-2xl"
              src="/Home/arrowRight.svg"
              alt="right"
            />
          </a>
        </div>
      </div>
      <div className="relative mt-4 flex flex-col items-center">
        <img src="/Home/Ellipse1.svg" alt="img" />
        <img src="/Home/Line1.svg" alt="img" />
      </div>
    </div>
  );
}
