import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "authslice",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      const { userInfo, setSubmitting, resetForm } = action.payload;
      axios
        .get("https://users-6b489-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          const users = response.data;

          const existingUser = Object.values(users).find(
            (user) => user.userEmail === userInfo.userEmail
          );
          if (existingUser) {
            console.log("user already exists!");
            setSubmitting(false);
            resetForm();
            return;
          } else {
            axios
              .post(
                "https://users-6b489-default-rtdb.firebaseio.com/users.json",
                userInfo
              )
              .then((response) => {
                // console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 400);
          }
        });
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
