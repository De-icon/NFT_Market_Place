import Hero from "./hero";
import TrendingCollection from "./trendingCollection";
import TopCreators from "./topCreators";
import Categories from "./categories";
import Discover from "./discover";
import HowItWork from "./howItWork";
import NewsLetter from "./newsLetter";

export default function Home() {
  return (
    <>
     <div className=" p-10 w-full h-full">
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <Categories />
      <Discover />
      <HowItWork />
      <NewsLetter />
    </div>
    </>
  );
}
