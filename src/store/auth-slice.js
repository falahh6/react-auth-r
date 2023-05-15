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
    login: async (state, action) => {
      const { userInfo, setSubmitting, resetForm } = action.payload;
      const { userEmail, userPassword } = userInfo;
      const response = await axios.get(
        "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json"
      );
      let fetchedUsers = response.data;

      const user = Object.values(fetchedUsers).find(
        (u) => u.userEmail === userEmail && u.userPassword === userPassword
      );

      if (user) {
        state.isLoggedIn = true;
        console.log(state.isLoggedIn);
        console.log("authenticated");
        console.log("yes");
        setSubmitting(false);
        resetForm();
      } else {
        console.log("no");
      }
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
