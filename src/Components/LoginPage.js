import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { auth, signInWithEmailAndPassword } from "../db/db";
import { useDispatch } from "react-redux";
import { actions as userSliceActions } from "../Store/UserSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [ authError, setAuthError ] = useState(null);

  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (authError){
      errors.email = authError
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.accessToken) {
            dispatch(
              userSliceActions.getCurrentUser({
                userId: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName,
                email: user.email,
                accessToken: user.accessToken,
              })
            );
            navigate("/")
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setAuthError(errorMessage)
        });
    },
  });

  return (
    <div className="w-full px-[100px] py-[100px] flex justify-center items-center gap-5">
      <img src={require("../assets/login.png")} alt="" className="w-[25%]" />
      <div className="w-[40%] px-[30px] py-[30px] flex flex-col justify-center items-center gap-[30px] border border-black-custom shadow-lg rounded-3xl">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h2 className="text-2xl font-bold">Welcome</h2>
          <h4 className="opacity-40">Please enter your details</h4>
        </div>
        <div className="w-full">
          <form
            className="w-full flex flex-col justify-center items-start gap-5"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border-2 border-black-custom rounded-3xl px-5 py-3 w-full focus:border-none"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 font-bold">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border-2 border-black-custom rounded-3xl px-5 py-3 w-full focus:border-none"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 font-bold">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <br />
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-brand-color text-white p-3 rounded-[50px] tracking-wider font-bold shadow-lg"
            >
              Login
            </button>
          </form>
          <br />
          <Link to="/signuppage">
            <h4 className="font-bold text-brand-color underline">
              Create a new account
            </h4>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center gap-5">
          <hr className="w-[40%]" />
          OR
          <hr className="w-[40%]" />
        </div>
        <button className="w-full p-3 mb-3 border-2 border-black-custom rounded-[50px] flex justify-center items-center gap-5">
          <FcGoogle className="text-2xl" />
          <span className="">Sign in with Google</span>
        </button>
      </div>
      <img src={require("../assets/bro.png")} alt="" className="w-[25%]" />
    </div>
  );
};

export default LoginPage;
