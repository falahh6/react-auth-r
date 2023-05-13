import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "authslice",
  initialState: authInitialState,
  reducers: {
    registerUser(state, action) {
      const userInfo = action.payload;
      axios
        .post(
          "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json",
          userInfo
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      state.isLoggedIn = true;
    },
    login(state, action) {
      const { userInfo, setSubmitting, resetForm } = action.payload;
      axios
        .get("https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json")
        .then((response) => {
          const users = response.data;
          const existingUser = Object.values(users).find(
            (user) =>
              user.userEmail === userInfo.userEmail &&
              user.userPassword === userInfo.userPassword
          );
          if (existingUser) {
            resetForm();
            console.log(" authenticated");
          } else {
            console.log("user not found");
            setSubmitting(false);
            resetForm();
            return;
          }
        });
      state.isLoggedIn = true;
      console.log("user authenticated");
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
