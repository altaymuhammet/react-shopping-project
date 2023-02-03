import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { actions as allProductsActions } from "./Store/productSlice";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import MixedProducts from "./Components/MixedProducts";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import { ToastContainer } from "react-toastify";
import { actions as userSliceActions } from "./Store/UserSlice";

function App() {
  const dispatch = useDispatch();
  const allPs = useSelector((state) => state.productsReducer.allProducts);
  const [spinner, setSpinner] = useState(false);
  const location = useLocation();

  const currentCategory = location.pathname.slice(1)
    ? location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2)
    : "Products";

  const currentCategoryPs = allPs.filter((c) => {
    if (c.category.replaceAll("'","").replaceAll(" ","") === location.pathname.slice(1).replaceAll(" ", "")) {
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

  if( JSON.parse(localStorage.getItem("user")) ) {
    const user = JSON.parse(localStorage.getItem("user"))
    dispatch(
      userSliceActions.getCurrentUser({
        userId: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        accessToken: user.accessToken,
      })
    );
  }

  return (
    <div className="relative">
      <Header />
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
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
