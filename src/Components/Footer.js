import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex justify-center items-start gap-[15%] flex-wrap py-[150px]">
      <div className="w-auto flex flex-col justify-start items-start gap-5">
        <h2 className="underline text-2xl">Categories</h2>
        <ul className="list-none flex flex-col gap-4">
          <Link to="/electronics">
            <li className="hover:underline cursor-pointer">Electronics</li>
          </Link>
          <Link to="/jewelery">
            <li className="hover:underline cursor-pointer">Jewelery</li>
          </Link>
          <Link to="/mensclothing">
            <li className="hover:underline cursor-pointer">Men's Clothing</li>
          </Link>
          <Link to="/womensclothing">
            <li className="hover:underline cursor-pointer">Women's Clothing</li>
          </Link>
        </ul>
      </div>
      <div className="w-auto flex flex-col justify-start items-start gap-5">
        <h2 className="underline text-2xl">About</h2>
        <ul className="list-none flex flex-col gap-4">
          <li className="hover:underline cursor-pointer">Who we are?</li>
          <li className="hover:underline cursor-pointer">Policies</li>
          <li className="hover:underline cursor-pointer">Investors</li>
          <li className="hover:underline cursor-pointer">Career</li>
        </ul>
      </div>
      <div className="w-auto flex flex-col justify-start items-start gap-5">
        <h2 className="underline text-2xl">Help</h2>
        <ul className="list-none flex flex-col gap-4">
          <li className="hover:underline cursor-pointer">Help center</li>
          <li className="hover:underline cursor-pointer">Privacy settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
