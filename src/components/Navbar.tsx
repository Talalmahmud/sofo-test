"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" sticky top-0 left-0 w-full z-20 bg-white  ">
      <div className="px-10 py-4 flex justify-between items-center">
        <div className=" h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <Image
            src={"/bar.svg"}
            alt="Logo"
            width={100}
            height={50}
            className="h-[20px] w-[20px]"
          />
        </div>
        <Link href={"/"}>
          {" "}
          <Image
            height={50}
            width={100}
            src={"/logo.png"}
            className=" h-[40px] w-[80px]"
            alt="Logo"
          />
        </Link>
        <div className=" flex items-center gap-3">
          <div className=" h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
            <Image
              src={"/bell.svg"}
              alt="Logo"
              width={100}
              height={50}
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className=" border-[1px] rounded-full p-2 flex items-center justify-center gap-[2px]">
            <select>
              <option className=" flex  items-center" value="en">
                <div>
                  {" "}
                  <Image
                    src={"/logo.png"}
                    alt="eng"
                    width={100}
                    height={50}
                    className="min-h-[16px] min-w-[16px]"
                  />
                </div>
                Eng
              </option>
              <option value="ar">العربية</option>
            </select>
          </div>
          <button className=" h-10 w-[110px] bg-black font-[500px] text-[18px] rounded-full items-center text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
