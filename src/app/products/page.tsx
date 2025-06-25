import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-[712px] mx-auto">
      <div className=" flex gap-5 justify-between items-center">
        <div className=" flex items-center gap-2">
          <div className=" bg-[#F3EFF6] h-10 w-10 rounded-full flex justify-center items-center">
            <Image
              src={"/leftarrow.svg"}
              alt="Logo"
              width={100}
              height={50}
              className="h-[12px] w-[6px]"
            />
          </div>
          <p className=" text-[40px] font-bold">
            Mecca mosques most <br /> needed
          </p>
        </div>
        <div className=" bg-black text-white border-[1px] rounded-full p-2 flex items-center justify-center gap-[2px]">
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
      </div>
      <div className="  grid grid-cols-4 gap-3">
        <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
