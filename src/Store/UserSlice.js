import { createSlice } from "@reduxjs/toolkit";
import { getDoc, db, setDoc, doc } from "../db/db";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    userId: "",
    photoURL: "",
    accessToken: "",
    addedProducts: [],
    isLoggedIn: false,
  },
  reducers: {
    getCurrentUser: (state, action) => {
      console.log(action.payload);
      state.name = action.payload.displayName
        ? action.payload.displayName
        : action.payload.name;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.uid
        ? action.payload.uid
        : action.payload.userId;
      state.photoURL = action.payload.photoURL;
      state.addedProducts = action.payload.addedProducts
        ? action.payload.addedProducts
        : [];
      state.isLoggedIn = true;
    },
    signoutCurrentUser: (state) => {
      state.name = "";
      state.email = "";
      state.accessToken = "";
      state.userId = "";
      state.photoURL = "";
      state.addedProducts = [];
      state.isLoggedIn = false;
    },
    deleteProduct: (state, action) => {
      const newSavedProductsList = state.addedProducts.filter(
        (product) => product.id !== action.payload.id
      );
      state.addedProducts = [...newSavedProductsList];
      setDoc(
        doc(db, "users", state.userId),
        state,
        { capital: true },
        { merge: true }
      );
    },
    addProductToCart: (state, action) => {
      if (state.addedProducts.length === 0) {
        state.addedProducts = [...state.addedProducts, action.payload];
      } else {
        const existingProduct = state.addedProducts.find(
          (p) => +p.id === +action.payload.id
        );
        if (existingProduct) {
          state.addedProducts = [...state.addedProducts];
        } else {
          state.addedProducts = [...state.addedProducts, action.payload];
        }
      }
      setDoc(
        doc(db, "users", state.userId),
        state,
        { capital: true },
        { merge: true }
      );
    },
  },
});

export const getAllUserInfoFromFirebase = (userId) => {
  return async (dispatch) => {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      const currentUser = docSnap.data();
      return currentUser;
    } else {
      return {};
    }
  };
};

export const actions = userSlice.actions;
export default userSlice.reducer;
