import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggenIn: false,
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
            (user) => user.userEmail === userInfo.userEmail // userInfo.userEmail
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
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

            setTimeout(() => {
              console.log(JSON.stringify(userInfo, null, 2));
              setSubmitting(false);
              resetForm();
            }, 400);
          }
        });
      state.isLoggenIn = true;
    },
    logout(state) {},
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
