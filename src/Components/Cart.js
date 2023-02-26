import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as userActions } from "../Store/UserSlice";
import { GoTrashcan } from "react-icons/go";

const Cart = () => {
  const addedProducts = useSelector((state) => state.userReducer.addedProducts);
  const [deleteState, setDeleteState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if( deleteState ) dispatch(userActions.deleteProduct(deleteState));
  }, [deleteState, dispatch]);


  return (
    <div className="mt-[100px] min-h-[500px] flex flex-col justify-center items-center">
      {addedProducts?.length === 0 && (
        <div className="mt-[100px] min-h-[500px] flex justify-center items-center">
          <h2 className="text-4xl font-bold">No products added!</h2>
        </div>
      )}
      {addedProducts.length > 0 &&
        addedProducts.map((product) => {
          const ratingPercent = (product.rating.rate * 100) / 5 + "%";
          return (
            <div
              key={product.id}
              className="w-[60%] flex flex-row justify-center gap-[50px] items-center mb-[50px] pb-5 border-b-2 border-black-custom relative"
            >
              <div className=" w-[30%] flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px]"
                />
              </div>
              <div className="w-[60%] flex flex-col justify-center items-start gap-2">
                <div className="w-full font-bold text-left text-xl">
                  <h2>{product.title}</h2>
                </div>
                <div className="w-full flex justify-start items-center gap-5 pb-5">
                  <div className="flex justify-between items-center gap-5">
                    <h2 className="font-bold">Rate:</h2>
                    <div className="w-[100px] h-[10px] border-2 border-gray-300 rounded-xl">
                      <div
                        className="h-full bg-green-600 rounded-xl"
                        style={{ width: `${ratingPercent}` }}
                      ></div>
                    </div>
                    <h2 className="font-bold">{product.rating.rate}</h2>
                  </div>
                  |
                  <div>
                    <h2 className="font-bold text-xl">
                      Price:
                      <span className="text-green-600"> ${product.price}</span>
                    </h2>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-5">
                  <div
                    onClick={() => setDeleteState(product)}
                    className="text-black-custom w-[40%] gap-3 p-2 cursor-pointer flex justify-center items-center border border-black-custom shadow-xl  font-bold rounded-[1rem] hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                   <span>Delete</span> <GoTrashcan />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
