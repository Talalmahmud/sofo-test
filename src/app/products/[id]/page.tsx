import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log(id);

  return (
    <div className=" w-[712px] mx-auto flex flex-col gap-[32px]">
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
          <p className=" text-[40px] font-bold">Product Details</p>
        </div>
        <div className=" bg-linear-to-r from-[#65358A] to-[#2B153C]  text-white border-[1px] rounded-full p-2 flex items-center justify-center gap-[2px]">
          <select>
            <option className=" flex  items-center" value="en">
              <div>
                {" "}
                <Image
                  src={"/dollar.png"}
                  alt="eng"
                  width={100}
                  height={50}
                  className="min-h-[16px] min-w-[16px]"
                />
              </div>
              SAR
            </option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8 ">
        <div className=" p-4 flex flex-col w-[317px]  gap-3 bg-[#F5F2F8] rounded-[16px] ">
          <div className=" rounded-[16px] bg-white w-[276px] h-[195px] flex justify-center items-center">
            <Image
              src={"/product.png"}
              alt="img-1"
              width={100}
              height={50}
              className=" h-[160px] w-[221px]"
            />
          </div>
          <div className=" w-full flex gap-4 overflow-x-auto">
            <div className=" flex-1 rounded-[16px] bg-white min-w-[160px] h-[105px] flex justify-center items-center">
              <Image
                src={"/product.png"}
                alt="img-8"
                width={100}
                height={50}
                className=" h-[80px] min-w-[86px] object-fill"
              />
            </div>
            <div className=" flex-1 rounded-[16px] bg-white min-w-[160px] h-[105px] flex justify-center items-center">
              <Image
                src={"/product.png"}
                alt="img-8"
                width={100}
                height={50}
                className=" h-[80px] w-[86px] object-fill"
              />
            </div>
            <div className=" flex-1 rounded-[16px] bg-white min-w-[160px] h-[105px] flex justify-center items-center">
              <Image
                src={"/product.png"}
                alt="img-8"
                width={100}
                height={50}
                className=" h-[80px] w-[86px] object-fill"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col ">
          <p className=" txt-[24px] font-medium">5 Cartons</p>
          <p className=" text-[20px] text-[#616161]">330 ml • 20 bottles</p>
          <div className=" flex items-center ">
            <Image
              src={"/price.svg"}
              alt="price"
              width={100}
              height={50}
              className=" h-[18px] w-[20px]"
            />
            <span className=" text-[28px]">50.0</span>
          </div>
          <button className=" rounded-[16px] bg-black text-white w-[134px] h-[32px] text-[16px] flex justify-center items-center">
            Add to Cart
          </button>
          <div className=" pt-4 ">
            <p className=" text-[16px] font-medium">Product Overview</p>
            <p className=" text-[16px]">
              For this items it will be distribute in Haram and Around Haram
              from 1 Ramadan to 10 Ramadan
            </p>
          </div>
          <div className=" pt-4 ">
            <p className=" text-[16px] font-medium">Key Features</p>
            <div className=" flex flex-col">
              <span> • 100% natural spring water source</span>
              <span> • Advanced multi-stage filtration</span>
              <span> • BPA-free recyclable packaging</span>
              <span> • Perfect pH balance (7.0-7.5)</span>
              <span> • Convenient bulk packaging</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className=" flex justify-between items-center">
          <p className=" text-[24px] font-medium">Suggested Similar Products</p>
          <button className=" flex items-center text-[20px]">
            <span>See All</span>
            <Image
              src={"/leftarrow.svg"}
              alt="arrow-right"
              width={100}
              height={50}
              className=" h-[16px] w-[16px] rotate-180 transform ml-2"
            />
          </button>
        </div>
        <div className="  grid grid-cols-4 gap-3">
          <ProductCard />
          <ProductCard /> <ProductCard /> <ProductCard />
        </div>
      </div>
    </div>
  );
}
