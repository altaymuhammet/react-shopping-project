import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useFormik } from "formik";
import { auth, createUserWithEmailAndPassword } from "../db/db";
import { useNavigate } from "react-router-dom";


const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 7) {
    errors.password = "Must be 7 characters or more";
  } else if (values.password !== values.passwordagain) {
    errors.password = "Password fields must be the same";
  }

  if (!values.passwordagain) {
    errors.passwordagain = "Required";
  } else if (values.passwordagain.length < 7) {
    errors.passwordagain = "Must be 7 characters or more";
  } else if (values.password !== values.passwordagain) {
    errors.passwordagain = "Password fields must be the same";
  }

  return errors;
};

const SignUpPage = () => {
  const [ signupFail, setSignupFail ] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordagain: "",
    },
    validate,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          setSignupFail(false);
          navigate("/loginpage")
        })
        .catch((error) => {
          setSignupFail(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage + " " + errorCode + typeof(errorCode));
        });
    },
  });

  return (
    <div className="w-full px-[100px] py-[100px] flex justify-center items-center gap-5">
      <img src={require("../assets/signup1.png")} alt="" className="w-[25%]" />
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
            {signupFail && <p className="text-red-600 font-bold">Sign up failed. Please try again.</p>}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-black-custom rounded-3xl px-5 py-3 w-full focus:border-none"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 font-bold">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-black-custom rounded-3xl px-5 py-3 w-full focus:border-none"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-600 font-bold">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="passwordAgain" className="font-bold">
                Confirm your password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordagain}
                name="passwordagain"
                type="password"
                id="passwordagain"
                placeholder="Enter your password"
                className="border-2 border-black-custom rounded-3xl px-5 py-3 w-full focus:border-none"
              />
              {formik.touched.passwordagain && formik.errors.passwordagain ? (
                <p className="text-red-600 font-bold">{formik.errors.passwordagain}</p>
              ) : null}
            </div>
            <br />
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-signColor text-white p-3 rounded-[50px] tracking-wider font-bold shadow-lg"
            >
              Sign Up
            </button>
            <Link to="/loginpage" className="w-full">
              <button
                type="button"
                className="w-full flex justify-center items-center gap-3 bg-white text-signColor p-3 border-2 border-signColor rounded-[50px] tracking-wider font-bold shadow-lg"
              >
                <BsArrowLeft className="font-bold text-2xl" />
                Go to Login page
              </button>
            </Link>
          </form>
        </div>
      </div>
      <img src={require("../assets/signup2.png")} alt="" className="w-[25%]" />
    </div>
  );
};

export default SignUpPage;
