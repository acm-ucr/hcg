"use client";
import LandingPageLogo from "@/public/mainLogo.webp";
import { useState } from "react";
import Image from "next/image";

const LandingHeader = () => {
  // let counter: number = 5;
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="relative flex h-[75vh] w-full flex-col items-center justify-center">
      <Image
        src={LandingPageLogo}
        alt="General Header"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="text-hcg-white absolute content-center text-center opacity-100">
        <div className="text-5xl font-bold">Highlander Consulting Group</div>
        <div>UC Riverside's Premier Consulting Organization</div>
        <button onClick={increment}>{counter}</button>
      </div>
    </div>
  );
};

export default LandingHeader;
