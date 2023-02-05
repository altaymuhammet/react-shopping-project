import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsArrowLeft } from "react-icons/bs";

const CardDetails = () => {
  const { id } = useParams();
  const allPs = useSelector((state) => state.productsReducer.allProducts);
  const currentProduct = allPs.find((product) => product.id === +id);
  const navigate = useNavigate();

  const backPageHAndler = () => {
      navigate(-1)
  };

  return (
    <div className="w-[80%] mb-[100px] mt-[150px] mx-auto px-[50px] py-10 flex justify-center items-center gap-[100px] text-center relative">
      <div onClick={backPageHAndler} className="absolute left-[50px] top-0 text-2xl text-black-custom cursor-pointer border-black-custom rounded border-2 transition-all w-[50px] flex justify-center items-center hover:text-white hover:bg-black-custom">
        <BsArrowLeft />
      </div>
      <div className="h-full w-[40%] flex justify-center items-center">
        <img src={currentProduct.image} alt={currentProduct.title} />
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-5">
        <div className="w-full font-bold text-left text-xl">
          <h2>{currentProduct.title}</h2>
        </div>
        <div className="w-full flex justify-between items-center pb-5 border-b-2 border-black-custom">
          <div className="flex justify-between items-center gap-5">
            <h2 className="font-bold">Rate:</h2>
            <div className="w-[100px] h-[10px] border-2 border-gray-300 rounded-xl">
              <div className="h-full w-[85%] bg-green-600 rounded-xl"></div>
            </div>
            <h2 className="font-bold">{currentProduct.rating.rate}</h2>
          </div>
          <div>
            <h2 className="font-bold text-xl">
              Price:
              <span className="text-green-600"> ${currentProduct.price}</span>
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-start items-center text-left py-5">
          <p>{currentProduct.description}</p>
        </div>
        <button className="w-full mx-auto bg-green-600 p-5 rounded-2xl text-2xl font-bold text-white shadow-xl hover:w-[90%] transition-all ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
