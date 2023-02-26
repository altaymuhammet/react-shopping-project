import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions as userSliceActions } from "../Store/UserSlice";

import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";

const CardDetails = () => {
  const { id } = useParams();
  const allPs = useSelector((state) => state.productsReducer.allProducts);
  const currentProduct = allPs.find((product) => product.id === +id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  const ratingPercent = (currentProduct.rating.rate * 100) / 5 + "%";

  const backPageHAndler = () => {
    navigate(-1);
  };

  const addtoCartClickHandler = () => {
    if (!isUserLoggedIn) {
      toast.error("Please login!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (isUserLoggedIn) {
      dispatch(userSliceActions.addProductToCart(currentProduct))
    }
  };

  return (
    <div className="w-[80%] mb-[100px] mt-[150px] mx-auto px-[50px] py-10 flex justify-center items-center gap-[100px] text-center relative">
      <div
        onClick={backPageHAndler}
        className="absolute left-[50px] top-0 text-2xl text-black-custom cursor-pointer border-black-custom rounded border-2 transition-all w-[50px] flex justify-center items-center hover:text-white hover:bg-black-custom"
      >
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
              <div
                className="h-full bg-green-600 rounded-xl"
                style={{ width: `${ratingPercent}` }}
              ></div>
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
        <button
          className="w-full mx-auto bg-green-600 p-5 rounded-2xl text-2xl font-bold text-white shadow-xl hover:w-[90%] transition-all"
          onClick={addtoCartClickHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
