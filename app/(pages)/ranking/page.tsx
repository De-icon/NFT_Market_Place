import Image from "next/image";
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9, Avatar10, } from "@/assets/img/profilePic"



export default function Ranking() {


  const cardss = [
    {
        name: "MoonDancer",
        image: Avatar1,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar2,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar3,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar4,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar5,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar6,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar7,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar8,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar9,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar10,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar1,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
    {
        name: "MoonDancer",
        image: Avatar2,
        price: "1.63 ETH",
        highestBid: "0.33 wETH",
    },
]

  return (
    <>
      <div className="p-10">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-WorkSans">Top Creators</h1>
          <p className="font-SpaceMono mt-5">Check out top ranking NFT artists on the NFT Marketplace</p>
        </div>

        <div className="w-full py-2 md:gap-24 px-5 md:px-10 flex justify-between items-center mt-10 border-2 rounded-3xl border-gray-400">
          <div className="flex gap-1 md:gap-10">
            <p className="text-gray-400 items-center">#</p>
            <p className="text-gray-400">Artists</p>
          </div>
          <div className="flex gap-3 md:gap-24 items-center">
            <p className="text-gray-400">Change</p>
            <p className="text-gray-400 hidden md:flex" >Volume</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-10">
          {cardss.map((card, index) => (
            <div key={index} className="px-5 md:px-10 md:py-5 py-2 md:gap-10 flex justify-between items-center bg-gray-600 rounded-3xl">
              <div className="flex gap-2 md:gap-10 items-center">
                <p className="text-white">{index + 1}</p>
                <Image src={card.image} className=" w-10 h-10 md:w-20 md:h-20 rounded-full" alt="profile image"/>
                <p className="text-white font-WorkSans text-[16px] md:text-2xl">{card.name}</p>
              </div>
              <div className="flex gap-2 md:gap-24 items-center font-SpaceMono">
                <p className="text-green-400">+ 1.60%</p>
                <p className="text-white hidden md:flex">12.4 ETH</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
