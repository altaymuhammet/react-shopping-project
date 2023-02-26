import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import MixedProducts from "./Components/MixedProducts";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import { ToastContainer } from "react-toastify";
import CardDetails from "./Components/CardDetails";
import UserMenu from "./Components/UserMenu";
import Cart from "./Components/Cart";

import { actions as allProductsActions } from "./Store/productSlice";
import {
  actions as userActions,
  getAllUserInfoFromFirebase,
} from "./Store/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "./db/db";

function App() {
  const dispatch = useDispatch();
  const allPs = useSelector((state) => state.productsReducer.allProducts);

  const CurrentUserMenu = useSelector(
    (state) => state.UserMenuReducer.isMenuActive
  );
  const isUserLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const [spinner, setSpinner] = useState(false);
  const location = useLocation();
  const currentCategory = location.pathname.slice(1)
    ? location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2)
    : "Products";

  const currentCategoryPs = allPs.filter((c) => {
    if (
      c.category.replaceAll("'", "").replaceAll(" ", "") ===
      location.pathname.slice(1).replaceAll(" ", "")
    ) {
      return c;
    }
    return null;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  useEffect(() => {
    const getProducts = async () => {
      setSpinner(true);
      const fetchProducts = await fetch("https://fakestoreapi.com/products");
      const allProducts = await fetchProducts.json();
      dispatch(allProductsActions.getAllProducts(allProducts));
      setSpinner(false);
    };
    getProducts();
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUserAddedProducts = dispatch(
          getAllUserInfoFromFirebase(user.uid)
        );
        currentUserAddedProducts.then((userInfo) => {
          dispatch(userActions.getCurrentUser(userInfo));
        });
      } else {
        dispatch(userActions.signoutCurrentUser());
      }
    });
  }, [dispatch]);

  return (
    <div className="relative">
      <Header />
      {CurrentUserMenu && <UserMenu />}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage spinner={spinner} allPs={allPs} title={currentCategory} />
          }
        />
        <Route
          path="/electronics"
          element={
            <MixedProducts
              products={currentCategoryPs}
              title={currentCategory}
            />
          }
        />
        <Route
          path="/jewelery"
          element={
            <MixedProducts
              products={currentCategoryPs}
              title={currentCategory}
            />
          }
        />
        <Route
          path="/mensclothing"
          element={
            <MixedProducts
              products={currentCategoryPs}
              title={currentCategory}
            />
          }
        />
        <Route
          path="/womensclothing"
          element={
            <MixedProducts
              products={currentCategoryPs}
              title={currentCategory}
            />
          }
        />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        {isUserLoggedIn && <Route path="/cart" element={<Cart />} />}
        <Route path="/productDetails/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
