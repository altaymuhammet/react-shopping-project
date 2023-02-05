import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { AiFillHeart } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

const Card = ({ info }) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className="w-[250px] relative bg-white shadow-lg mt-[50px] gap-4  rounded-2xl flex flex-col justify-start items-center px-3 py-5">
      <Link to={`/productDetails/${info.id}`} className="w-full flex justify-center items-center h-auto">
        <img
          src={info.image}
          alt="Product"
          className="h-[175px] rounded"
        />
      </Link>
      <div className="flex flex-col justify-start items-start w-full gap-y-5 font-semibold border-t-2 border-black-custom pt-3">
        <div className="flex justify-between items-center w-full">
          <span>Rate: {info.rating.rate}</span>
          <span className=" text-green-600 rounded-lg p-1 text-sm">
            ${info.price}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black-custom">{`${info.title.substring(
            0,
            20
          )}...`}</p>
          <p className="opacity-40">Category: {info.category}</p>
        </div>
        <div className="flex justify-center items-center gap-3 w-full">
          <button className="flex justify-center items-center gap-2 w-[80%] bg-brand-color text-white py-2 rounded-2xl">
            <span>Add to Cart</span>
            <MdShoppingCart />
          </button>
          <div
            className="w-[38px] h-[38px] border-2 border-brand-color rounded-lg flex justify-center items-center cursor-pointer"
            onClick={() => {
              setSaved(!saved);
            }}
          >
            <AiFillHeart
              className={`${saved ? "text-red-600" : "text-gray-400"} text-xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
