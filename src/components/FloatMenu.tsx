"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function FloatingMenu() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  const menuItems = [
    { name: "Home", path: "/", icon: "/home.svg" },
    { name: "Cart", path: "/cart", icon: "/cart.svg" },
    { name: "Orders", path: "/orders", icon: "/order.svg" },
    { name: "Media", path: "/media", icon: "/media.svg" },
    { name: "Profile", path: "/profile", icon: "/profile.svg" },
  ];

  return (
    <div className="fixed bottom-10 w-[492px] left-1/2 -translate-x-1/2 z-50">
      <div className=" relative h-[64px] bg-white rounded-full shadow-lg p-1 border border-gray-100">
        <div className=" absolute top-2 flex w-full justify-between">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center p-3 gap-4 rounded-full transition-all duration-200 ${
                activeTab === item.path
                  ? " text-blue-600"
                  : " hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(item.path)}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className={`w-6 h-6 ${
                  activeTab === item.path ? "opacity-100" : "opacity-70"
                }`}
              />
              <span className="text-[20px] mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
