"use client";

import Image from "next/image";

import {
  Heart,
  ShoppingBag,
  MapPin,
  Home,
} from "lucide-react";

const categories = [
  {
    name: "Men",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Women",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Kids",
    image: "https://i.pravatar.cc/200?img=13",
  },
  {
    name: "Sale",
    image: "https://i.pravatar.cc/200?img=14",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ================= SEARCH BAR ================= */}

      <div className="px-4 py-4 border-b">

        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="flex items-center bg-[#f2f2f2] rounded-2xl px-4 h-14 flex-1">

            {/* LOGO */}
            <Image
              src="/logo.png"
              alt="ANAVRIN"
              width={34}
              height={34}
              className="rounded-full"
            />

            {/* INPUT */}
            <input
              type="text"
              placeholder="Search by product, brands..."
              className="bg-transparent outline-none ml-4 text-base flex-1"
            />
          </div>

          {/* ICONS */}
          <button>
            <Heart size={30} />
          </button>

          <button>
            <ShoppingBag size={30} />
          </button>
        </div>
      </div>

      {/* ================= LOCATION ================= */}

      {/* <div className="border-b px-5 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <MapPin
            className="text-pink-500"
            size={24}
          />

          <p className="font-semibold text-lg">
            No location found
          </p>
        </div>

        <button className="text-sky-600 font-bold text-base">
          Enter your location
        </button>
      </div> */}

      {/* ================= CATEGORIES ================= */}

      <div className="border-b">

        <div className="flex gap-7 mt overflow-x-auto px-5 py-4">

          {/* HOME */}
          <div className="flex flex-col items-center min-w-fit">

            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-md">

              <Home size={28} />
            </div>

            <p className="mt-2 font-medium">
              Home
            </p>
          </div>

          {/* OTHER CATEGORIES */}
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-fit"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-[3px] border-white shadow-md"
              />

              <p className="mt-2 text-gray-700 font-semibold text-base">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </header>
  );
}