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
            (user) => user.userEmail === userInfo.userEmail
          );
          if (existingUser) {
            console.log("user authenticated");
            return {
              ...state,
              isLoggedIn: true,
            };
          } else {
            console.log("user not found");
            return;
          }
        })
        .then(() => {
          state.isLoggedIn = true;
          setSubmitting(false);
          resetForm();
        });
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
