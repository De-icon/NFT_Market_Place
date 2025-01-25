import Image from "next/image";
import cardss from "@/app/(pages)/topCreators"
import { Avatar1 } from "@/assets/img/profilePic";


type RankingCard = {
  name: string;
  image: StaticImageData;
}

export default function Ranking() {

  const rankingCard: RankingCard[] = cardss;

    return (
      <>
        <div className=" p-10">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-WorkSans">Top Creators</h1>
            <p className="font-SpaceMono mt-5">Check out top ranking NFT artists on the NFT Marketplace</p>
          </div>

          <div className=" w-full py-5 px-10 flex justify-between items-center  mt-10 border-2 rounded-3xl border-gray-400">
            <div className=" flex gap-10">
              <p className=" text-gray-400 items-center">#</p>
              <p className=" text-gray-400">Artists</p>
            </div>
            <div className=" flex gap-24 items-center">
              <p className=" text-gray-400">Change</p>
              <p className=" text-gray-400">Volume</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">

            <div className="px-10 py-5 flex justify-between items-center mt-10 bg-gray-600 rounded-3xl">

            {rankingCard.map((card, index) => (
              <div key={index} className="w-full flex justify-between items-center">

                <div className="flex gap-10 items-center">
                  <p className="text-white">{index + 1}</p>
                  <Image src={card.image} className="w-20 h-20 rounded-full" alt="profile image"/>
                  <p className="text-white font-WorkSans text-2xl">{card.name}</p>
                </div>

                <div className="flex gap-24 items-center font-SpaceMono">
                  <p className="text-green-400">+ 1.60%</p>
                  <p className="text-white">12.4 ETH</p>
                </div>
              </div>
          ))}

              <div className=" flex gap-10 items-center">
                <p className=" text-white ">1</p>
                <Image src={Avatar1} className=" w-20 h-20 rounded-full" alt="profil image"/>
                <p className=" text-white font-WorkSans text-2xl">MoonDancer</p>
              </div>

              <div className=" flex gap-20 items-center font-SpaceMono">
                <p className=" text-green-400 ">+ 1.60%</p>
                <p className=" text-white ">12.4 ETH</p>
              </div>

            </div>
          </div>
        </div>
        
      </>
    );
  }