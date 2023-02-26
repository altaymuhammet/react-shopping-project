import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserInfoFromFirebase } from "../Store/UserSlice";

const MixedProducts = ({ products, title }) => {
  // const [productState, setProductState] = useState([]);
  let categoryTitle =
    title === "Mensclothing"
      ? "Men's Clothing"
      : title === "Womensclothing"
      ? "Women's Clothing"
      : title;
      // const currentUserId = useSelector((state) => state.userReducer.userId);
      // const dispatch = useDispatch();
      
      // console.log(getAllUserInfoFromFirebase())

  // useEffect(() => {
  //   dispatch(getAllUserInfoFromFirebase(currentUserId)).then((products) => {
  //     const loggedUserInfo = products.filter(
  //       (product) => product.userId === currentUserId
  //     );
  //     setProductState(loggedUserInfo[0].savedProducts);
  //   });
  // }, [dispatch, currentUserId]);

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
      <div className="w-full flex justify-center items-center flex-wrap gap-x-16">
        {products.map((product) => {
          return <Card info={product} key={product.id} savedState={false} />;
        })}
      </div>
    </div>
  );
};

export default MixedProducts;
