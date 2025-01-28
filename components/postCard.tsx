import Image from "next/image"
import { StaticImageData } from 'next/image';


interface CardProps {
    title: string;
    creator: string;
    price: string;
    highestBid: string;
    image: StaticImageData;  // Instead of string
    profile: StaticImageData; 
}
export default function PostCard({title, creator, price, highestBid, image, profile}: CardProps) {
  return (
    <div>
        <div className="flex flex-col space-y-2 bg-secondary rounded-3xl shadow-lg overflow-hidden">
                    <div className=" w-full">
                        <Image  src={image} alt="image" />
                    </div>
                    <div className="flex flex-col space-y-2 font-SpaceMono p-5">
                        <h2 className=" text-2xl font-WorkSans font-bold">{title}</h2>
                        <div className="flex space-x-2 items-center">
                            <Image className=' w-16 h-16 rounded-full' src={profile}  alt="profile"/>
                            <p className=" text-xl">{creator}</p>
                        </div>
                        <div className=" flex items-center justify-between">
                            <div className=" flex flex-col space-y-1">
                                <p className=" text-[#858584]">Price</p>
                                <p>{price}</p>
                            </div>
                            <div className=" flex flex-col space-y-1 items-end">
                                <p className=" text-[#858584]">Highest Bid</p>
                                <p>{highestBid}</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
