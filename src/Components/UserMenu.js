import React from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";

import { actions as userMenuActions } from "../Store/UserMenuSlice";
import { actions as userActions } from "../Store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut, auth } from "../db/db";
import { toast } from "react-toastify";

import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
import { HiOutlineLogout, HiShoppingCart } from "react-icons/hi";

const Menu = () => {
  const userInfo = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeClickHandler = () => {
    dispatch(userMenuActions.showUserMenu(false));
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(userActions.signoutCurrentUser());
        localStorage.removeItem("user");
        navigate("/");
        closeClickHandler();
      })
      .catch((err) => {
        toast.error("Somthing went wrong! " + err, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="w-[300px] h-[100vh]  bg-white absolute right-0 z-50">
      <div className="h-full relative flex flex-col justify-start items-center">
        <div className="w-full h-[100px] flex justify-start items-center gap-5 p-5 border-b-2 border-black-custom">
          {userInfo?.photoURL ? (
            <img
              src={userInfo.photoURL}
              alt="Profile"
              className="w-[70px] h-[70px] rounded-[50%] border border-black-custom"
            />
          ) : (
            <div className="w-[70px] h-[70px] rounded-[50%] border border-black-custom flex justify-center items-center">
              <p>Profile</p>
            </div>
          )}
          <h2 className="font-bold">{userInfo?.name ? userInfo.name : "User"}</h2>
          <AiFillCloseCircle
            onClick={closeClickHandler}
            className="absolute top-2 right-2 text-3xl cursor-pointer text-black-custom rounded-[50%] hover:text-red-500 hover:bg-white"
          />
        </div>
        <ul className="w-full list-none py-5 flex flex-col justify-start items-start gap-5">
          <li className="hover:underline w-full" onClick={closeClickHandler}>
            <Link
              to="/savedproducts"
              className="flex justify-start items-center px-5 gap-4"
            >
              <AiFillHeart className="text-xl" />
              <p className="font-bold">Saved Products</p>
            </Link>
          </li>
          <li className="hover:underline w-full" onClick={closeClickHandler}>
            <Link
              to="/cart"
              className="flex justify-start items-center px-5 gap-4"
            >
              <HiShoppingCart className="text-xl" />
              <p className="font-bold">Cart</p>
            </Link>
          </li>
        </ul>
        <button
          onClick={logoutHandler}
          className="w-[90%] py-3 flex justify-center items-center gap-5 bg-red-500 hover:bg-red-600 text-white absolute bottom-3 rounded-xl font-bold"
        >
          <p>Logout</p>
          <HiOutlineLogout className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const Backdrop = () => {
  const dispatch = useDispatch();

  const backDropClickhandler = () => {
    dispatch(userMenuActions.showUserMenu(false));
  };

  return (
    <div
      className="w-full h-[100vh] bg-black-custom opacity-50 z-40"
      onClick={backDropClickhandler}
    ></div>
  );
};

const UserMenu = () => {
  return (
    <>
      {createPortal(<Menu />, document.getElementById("usermenu"))}
      {createPortal(<Backdrop />, document.getElementById("usermenu"))}
    </>
  );
};

export default UserMenu;
