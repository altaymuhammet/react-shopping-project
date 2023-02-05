import React from "react";
import Card from "./Card";

const MixedProducts = ({ products, title }) => {
  let categoryTitle =
    title === "Mensclothing"
      ? "Men's Clothing"
      : title === "Womensclothing"
      ? "Women's Clothing"
      : title;

  return (
    <div
      className={`w-full h-auto bg-favColor flex justify-center items-center flex-wrap ${
        categoryTitle === "Products" ? "pt-[100px]" : "pt-[150px]"
      } py-[100px] px-[100px] gap-3`}
    >
      <div className="w-full flex justify-start items-center pl-7">
        <h1 className="text-3xl font-bold text-black-custom underline">
          {categoryTitle}
        </h1>
      </div>
      <div className="w-full flex justify-start items-center flex-wrap gap-x-16">
        {products.map((product) => {
          return <Card info={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default MixedProducts;
