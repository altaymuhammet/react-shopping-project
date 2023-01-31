import React from "react";
import MixedProducts from "./MixedProducts";
import { Oval } from "react-loader-spinner";
import HeroSlider from "./Slider/HeroSlider";

const HomePage = ({ spinner, allPs, title }) => {
  return (
    <div className="w-full">
      <HeroSlider />
      <div className="bg-favColor w-full pb-[100px] mt-[100px]">
      <MixedProducts products={allPs} title={title} />
      {spinner && (
        <div className="w-full flex justify-center items-center mb-[100px]">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      </div>
    </div>
  );
};

export default HomePage;
