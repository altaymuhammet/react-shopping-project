import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userReducer);
  console.log(userInfo);

  let activeStyle = {
    color: "#27D798",
    textDecoration: "underline",
  };

  const logoClickHandler = () => {
    navigate("/");
  };

  return (
    <header className="px-[200px] w-full flex flex-col gap-8 border-b-2 border-black-custom pb-[30px]">
      <div className="flex flex-row justify-start items-center gap-8 pt-5">
        <svg
          onClick={logoClickHandler}
          width="100"
          viewBox="0 0 194 74"
          fill="none"
          className="cursor-pointer"
        >
          {" "}
          <g filter="url(#filter0_d_101_10)">
            {" "}
            <path
              d="M33.4194 45.6451C33.4194 46.7497 34.3149 47.6451 35.4194 47.6451C36.524 47.6451 37.4194 46.7497 37.4194 45.6451H33.4194ZM4.33333 45.6451C4.33333 51.5362 9.10896 56.3118 15 56.3118C20.891 56.3118 25.6667 51.5362 25.6667 45.6451C25.6667 39.7541 20.891 34.9785 15 34.9785C9.10896 34.9785 4.33333 39.7541 4.33333 45.6451ZM63 47.6451C64.1046 47.6451 65 46.7497 65 45.6451C65 44.5406 64.1046 43.6451 63 43.6451V47.6451ZM52.3139 43.6451C51.2093 43.6451 50.3139 44.5406 50.3139 45.6451C50.3139 46.7497 51.2093 47.6451 52.3139 47.6451V43.6451ZM35.4194 10.6451H37.8431V6.64514H35.4194V10.6451ZM33.4194 8.64514V27.1451H37.4194V8.64514H33.4194ZM33.4194 27.1451V45.6451H37.4194V27.1451H33.4194ZM54.3431 27.1451V45.6451H58.3431V27.1451H54.3431ZM35.4194 29.1451H56.3431V25.1451H35.4194V29.1451ZM13 29.0646V45.6451H17V29.0646H13ZM56.3431 47.6451H63V43.6451H56.3431V47.6451ZM56.3431 43.6451H52.3139V47.6451H56.3431V43.6451ZM35.4194 6.64514C23.0375 6.64514 13 16.6827 13 29.0646H17C17 18.8918 25.2467 10.6451 35.4194 10.6451V6.64514ZM37.8431 10.6451C46.9558 10.6451 54.3431 18.0324 54.3431 27.1451H58.3431C58.3431 15.8233 49.1649 6.64514 37.8431 6.64514V10.6451Z"
              fill="black"
            />{" "}
            <path
              d="M74.2635 40.3971C72.5115 40.3971 70.9275 40.0971 69.5115 39.4971C68.1195 38.8971 67.0155 38.0331 66.1995 36.9051C65.3835 35.7771 64.9635 34.4451 64.9395 32.9091H70.3395C70.4115 33.9411 70.7715 34.7571 71.4195 35.3571C72.0915 35.9571 73.0035 36.2571 74.1555 36.2571C75.3315 36.2571 76.2555 35.9811 76.9275 35.4291C77.5995 34.8531 77.9355 34.1091 77.9355 33.1971C77.9355 32.4531 77.7075 31.8411 77.2515 31.3611C76.7955 30.8811 76.2195 30.5091 75.5235 30.2451C74.8515 29.9571 73.9155 29.6451 72.7155 29.3091C71.0835 28.8291 69.7515 28.3611 68.7195 27.9051C67.7115 27.4251 66.8355 26.7171 66.0915 25.7811C65.3715 24.8211 65.0115 23.5491 65.0115 21.9651C65.0115 20.4771 65.3835 19.1811 66.1275 18.0771C66.8715 16.9731 67.9155 16.1331 69.2595 15.5571C70.6035 14.9571 72.1395 14.6571 73.8675 14.6571C76.4595 14.6571 78.5595 15.2931 80.1675 16.5651C81.7995 17.8131 82.6995 19.5651 82.8675 21.8211H77.3235C77.2755 20.9571 76.9035 20.2491 76.2075 19.6971C75.5355 19.1211 74.6355 18.8331 73.5075 18.8331C72.5235 18.8331 71.7315 19.0851 71.1315 19.5891C70.5555 20.0931 70.2675 20.8251 70.2675 21.7851C70.2675 22.4571 70.4835 23.0211 70.9155 23.4771C71.3715 23.9091 71.9235 24.2691 72.5715 24.5571C73.2435 24.8211 74.1795 25.1331 75.3795 25.4931C77.0115 25.9731 78.3435 26.4531 79.3755 26.9331C80.4075 27.4131 81.2955 28.1331 82.0395 29.0931C82.7835 30.0531 83.1555 31.3131 83.1555 32.8731C83.1555 34.2171 82.8075 35.4651 82.1115 36.6171C81.4155 37.7691 80.3955 38.6931 79.0515 39.3891C77.7075 40.0611 76.1115 40.3971 74.2635 40.3971ZM98.757 19.9131C100.269 19.9131 101.613 20.2491 102.789 20.9211C103.965 21.5691 104.877 22.5411 105.525 23.8371C106.197 25.1091 106.533 26.6451 106.533 28.4451V40.1451H101.493V29.1291C101.493 27.5451 101.097 26.3331 100.305 25.4931C99.513 24.6291 98.433 24.1971 97.065 24.1971C95.673 24.1971 94.569 24.6291 93.753 25.4931C92.961 26.3331 92.565 27.5451 92.565 29.1291V40.1451H87.525V13.5051H92.565V22.6851C93.213 21.8211 94.077 21.1491 95.157 20.6691C96.237 20.1651 97.437 19.9131 98.757 19.9131ZM120.182 40.4691C118.262 40.4691 116.534 40.0491 114.998 39.2091C113.462 38.3451 112.25 37.1331 111.362 35.5731C110.498 34.0131 110.066 32.2131 110.066 30.1731C110.066 28.1331 110.51 26.3331 111.398 24.7731C112.31 23.2131 113.546 22.0131 115.106 21.1731C116.666 20.3091 118.406 19.8771 120.326 19.8771C122.246 19.8771 123.986 20.3091 125.546 21.1731C127.106 22.0131 128.33 23.2131 129.218 24.7731C130.13 26.3331 130.586 28.1331 130.586 30.1731C130.586 32.2131 130.118 34.0131 129.182 35.5731C128.27 37.1331 127.022 38.3451 125.438 39.2091C123.878 40.0491 122.126 40.4691 120.182 40.4691ZM120.182 36.0771C121.094 36.0771 121.946 35.8611 122.738 35.4291C123.554 34.9731 124.202 34.3011 124.682 33.4131C125.162 32.5251 125.402 31.4451 125.402 30.1731C125.402 28.2771 124.898 26.8251 123.89 25.8171C122.906 24.7851 121.694 24.2691 120.254 24.2691C118.814 24.2691 117.602 24.7851 116.618 25.8171C115.658 26.8251 115.178 28.2771 115.178 30.1731C115.178 32.0691 115.646 33.5331 116.582 34.5651C117.542 35.5731 118.742 36.0771 120.182 36.0771ZM139.323 23.0811C139.971 22.1691 140.859 21.4131 141.987 20.8131C143.139 20.1891 144.447 19.8771 145.911 19.8771C147.615 19.8771 149.151 20.2971 150.519 21.1371C151.911 21.9771 153.003 23.1771 153.795 24.7371C154.611 26.2731 155.019 28.0611 155.019 30.1011C155.019 32.1411 154.611 33.9531 153.795 35.5371C153.003 37.0971 151.911 38.3091 150.519 39.1731C149.151 40.0371 147.615 40.4691 145.911 40.4691C144.447 40.4691 143.151 40.1691 142.023 39.5691C140.919 38.9691 140.019 38.2131 139.323 37.3011V49.6491H134.283V20.2011H139.323V23.0811ZM149.871 30.1011C149.871 28.9011 149.619 27.8691 149.115 27.0051C148.635 26.1171 147.987 25.4451 147.171 24.9891C146.379 24.5331 145.515 24.3051 144.579 24.3051C143.667 24.3051 142.803 24.5451 141.987 25.0251C141.195 25.4811 140.547 26.1531 140.043 27.0411C139.563 27.9291 139.323 28.9731 139.323 30.1731C139.323 31.3731 139.563 32.4171 140.043 33.3051C140.547 34.1931 141.195 34.8771 141.987 35.3571C142.803 35.8131 143.667 36.0411 144.579 36.0411C145.515 36.0411 146.379 35.8011 147.171 35.3211C147.987 34.8411 148.635 34.1571 149.115 33.2691C149.619 32.3811 149.871 31.3251 149.871 30.1011ZM161.237 17.8251C160.349 17.8251 159.605 17.5491 159.005 16.9971C158.429 16.4211 158.141 15.7131 158.141 14.8731C158.141 14.0331 158.429 13.3371 159.005 12.7851C159.605 12.2091 160.349 11.9211 161.237 11.9211C162.125 11.9211 162.857 12.2091 163.433 12.7851C164.033 13.3371 164.333 14.0331 164.333 14.8731C164.333 15.7131 164.033 16.4211 163.433 16.9971C162.857 17.5491 162.125 17.8251 161.237 17.8251ZM163.721 20.2011V40.1451H158.681V20.2011H163.721ZM183.749 40.1451L178.313 31.6851L173.381 40.1451H167.693L175.613 27.4731L167.585 15.0171H173.381L178.817 23.4411L183.713 15.0171H189.401L181.517 27.6531L189.545 40.1451H183.749Z"
              fill="#030002"
            />{" "}
            <path
              d="M75 47.6451C132 84.1168 179 47.6451 179 47.6451"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <filter
              id="filter0_d_101_10"
              x="0.333252"
              y="6.64514"
              width="193.212"
              height="66.7094"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              {" "}
              <feFlood floodOpacity="0" result="BackgroundImageFix" />{" "}
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />{" "}
              <feOffset dy="4" /> <feGaussianBlur stdDeviation="2" />{" "}
              <feComposite in2="hardAlpha" operator="out" />{" "}
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />{" "}
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_101_10"
              />{" "}
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_101_10"
                result="shape"
              />{" "}
            </filter>{" "}
          </defs>{" "}
        </svg>
        <form className="grow">
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-black-custom rounded-3xl px-5 py-1 w-full focus:border-none"
          />
        </form>
        {userInfo?.isLoggedIn && (
          <Link to="/savedproducts">
            <div className="flex flex-col justify-center items-center hover:underline">
              <AiFillHeart className="text-xl" />
              <p className="font-semibold">Saved</p>
            </div>
          </Link>
        )}
        {userInfo?.isLoggedIn && (
          <Link to="/cart">
            <div className="flex flex-col justify-center items-center hover:underline">
              <HiShoppingCart className="text-xl" />
              <p className="font-semibold">Cart</p>
            </div>
          </Link>
        )}
        {userInfo?.isLoggedIn && userInfo?.photoURL && userInfo?.name && (
          <div className="flex flex-col justify-center items-center hover:underline cursor-pointer">
            <div
              className={classes.photoDiv}
              style={{ backgroundImage: `url(${userInfo.photoURL})` }}
            ></div>
            <p className="font-semibold">{userInfo?.name}</p>
          </div>
        )}
        {userInfo?.isLoggedIn && userInfo?.photoURL && !userInfo?.name && (
          <div className="flex flex-col justify-center items-center hover:underline cursor-pointer">
            <div
              className={classes.photoDiv}
              style={{ backgroundImage: `url(${userInfo.photoURL})` }}
            ></div>
            <p className="font-semibold">User</p>
          </div>
        )}
        {userInfo?.isLoggedIn && !userInfo?.photoURL && userInfo?.name && (
          <div className="flex flex-col justify-center items-center hover:underline cursor-pointer">
            <FaUserAlt className="text-lg" />
            <p className="font-semibold">{userInfo?.name}</p>
          </div>
        )}
        {userInfo?.isLoggedIn && !userInfo?.photoURL && !userInfo?.name && (
          <div className="flex flex-col justify-center items-center hover:underline cursor-pointer">
            <FaUserAlt className="text-lg" />
            <p className="font-semibold">User</p>
          </div>
        )}
        {!userInfo?.isLoggedIn && (
          <Link to="/loginpage">
            <div className="flex flex-col justify-center items-center font-semibold hover:underline">
              <FaUserAlt className="text-lg" />
              <p>Login</p>
            </div>
          </Link>
        )}
      </div>
      <nav className="m-auto">
        <ul className="flex flex-row gap-8 font-semibold">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jewelery"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mensclothing"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Men's clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/womensclothing"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Women's clothing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
