import Image from "next/image";
import React from "react";
import CustomSwiperSlide from "./SwiperSlide";

const Home = () => {
  return (
    <div className=" w-[712px] flex flex-col gap-10 mx-auto">
      <h2 className=" text-[40px] font-[700px]">Home</h2>
      <Image
        src={"/screen.png"}
        alt="Logo"
        width={100}
        height={50}
        className="w-[434px] h-[200px] object-fill"
      />
      <CustomSwiperSlide />
      <Image
        src={"/show.svg"}
        alt="Logo"
        width={100}
        height={50}
        className="h-[152px] w-full"
      />
      <div className=" flex justify-between items-center gap-4">
        <Image
          src={"/img-1.png"}
          alt="img-1"
          width={100}
          height={50}
          className="h-[200px] w-[200px]"
        />
        <Image
          src={"/img-1.png"}
          alt="img-1"
          width={100}
          height={50}
          className="h-[200px] w-[200px]"
        />
        <Image
          src={"/img-1.png"}
          alt="img1"
          width={100}
          height={50}
          className="h-[200px] w-[200px]"
        />
      </div>
    </div>
  );
};

export default Home;
