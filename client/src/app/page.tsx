"use client";

import Image from "next/image";

import {
  Heart,
  ShoppingBag,
  MapPin,
  Home,
  Flame,
  Grid3X3,
  Store,
  User,
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

const miniCards = [
  {
    title: "AJIO LUXE",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    title: "BEAUTY",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "TOP BRANDS",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    title: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen pb-28 w-full overflow-x-hidden">

      {/* ================= HEADER ================= */}

      <div className="sticky top-0 z-50 bg-white shadow-sm">
        
        {/* SEARCH */}
        <header className="px-4 py-4 border-b">
          <div className="flex items-center gap-3">

            {/* SEARCH BAR */}
            <div className="flex items-center bg-[#f2f2f2] rounded-2xl px-4 h-16   flex-1">

              <Image
                src="/logo.png"
                alt="ANAVRIN"
                width={150}
                height={300}
                className="rounded-full"
              />

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
        </header>

        {/* LOCATION */}
        <div className="border-b px-5 py-4 gap-0.5 flex items-center justify-between">
          
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
        </div>

        {/* CATEGORIES */}
        <div className="border-b">
          <div className="flex gap-7 overflow-x-auto px-5 py-4">

            {/* HOME */}
            <div className="flex flex-col items-center min-w-fit">
              
              <div className="w-18 h-18 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                <Home size={30} />
              </div>

              <p className="mt-2 font-medium">
                Home
              </p>
            </div>

            {categories.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-fit"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-18 h-18 rounded-full object-cover border-[3px] border-white shadow-md"
                />

                <p className="mt-2 text-gray-700 font-semibold text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MINI CARDS ================= */}

      <section className="px-4 py-4">
        
        <div className="flex overflow-x-auto gap-4">

          {miniCards.map((card, i) => (
            <div
              key={i}
              className="min-w-[180px] h-[210px] rounded-[30px] overflow-hidden relative shadow-lg"
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <p className="absolute bottom-4 left-4 text-white font-black text-xl">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HERO BANNER ================= */}

      <section className="px-4 mt-2">
        
        <div className="relative rounded-[40px] overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
            alt=""
            className="w-full h-[700px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-10 left-8 text-white">

            <h1 className="text-6xl font-black leading-none">
              RED HOT
            </h1>

            <h1 className="text-6xl font-black leading-none">
              SALE
            </h1>

            <p className="text-5xl font-bold mt-4">
              50-90% OFF
            </p>

            <button className="mt-7 bg-white text-black px-8 py-4 rounded-full font-black shadow-lg text-lg">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* ================= STYLE SECTION ================= */}

      <section className="px-4 mt-5">

        <div className="bg-gradient-to-r from-indigo-700 to-violet-600 rounded-[30px] p-8 text-center">

          <h2 className="text-yellow-300 font-black text-4xl">
            STYLE ON REPEAT
          </h2>

          <p className="text-white mt-3 text-lg">
            Trending Fashion Collection
          </p>
        </div>
      </section>

      {/* ================= BIG IMAGE ================= */}

      <section className="px-4 mt-5">

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt=""
          className="w-full h-[500px] object-cover rounded-[35px]"
        />
      </section>

      {/* ================= BOTTOM NAV ================= */}

      <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t h-22 flex justify-around items-center z-50 shadow-2xl">

        <button className="flex flex-col items-center text-sm">
          <Store size={30} />
          <p className="mt-1 font-medium">
            Stores
          </p>
        </button>

        <button className="flex flex-col items-center text-sm text-blue-700">
          <Flame size={30} />
          <p className="mt-1 font-semibold">
            Hot
          </p>
        </button>

        <button className="flex flex-col items-center text-sm">
          <Grid3X3 size={30} />
          <p className="mt-1 font-medium">
            Categories
          </p>
        </button>

        <button className="flex flex-col items-center text-sm">
          <User size={30} />
          <p className="mt-1 font-medium">
            Account
          </p>
        </button>
      </nav>
    </main>
  );
}