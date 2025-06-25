import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className=" p-4 flex flex-col w-[166px] justify-center items-center gap-3 bg-[#F5F2F8] rounded-[16px] ">
      <div className=" rounded-[16px] bg-white w-[134px] h-[88px] flex justify-center items-center">
        <Image
          src={"/product.png"}
          alt="img-1"
          width={100}
          height={50}
          className=" h-[72px] w-[118px]"
        />
      </div>
      <p className=" txt-[16px]">5 Cartons</p>
      <p className=" text-[14px] text-[#616161]">330 ml • 20 bottles</p>
      <div className=" flex items-center ">
        <Image
          src={"/price.svg"}
          alt="price"
          width={100}
          height={50}
          className=" h-[16px] w-[16px]"
        />
        <span>50.0</span>
      </div>
      <button className=" rounded-[16px] bg-black text-white w-[134px] h-[32px] text-[16px] flex justify-center items-center">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
