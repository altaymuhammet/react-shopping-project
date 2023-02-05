import { createSlice } from "@reduxjs/toolkit";

const UserMenuSlice = createSlice({
    name: "usermenu",
    initialState: {
        isMenuActive: false,
    },
    reducers: {
        showUserMenu: (state, action) => {
            state.isMenuActive = action.payload;
        }
    }
})

export const actions = UserMenuSlice.actions;
export default UserMenuSlice.reducer;