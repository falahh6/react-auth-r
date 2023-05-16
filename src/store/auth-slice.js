import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggedIn: false,
};

export const login = createAsyncThunk("authslice/login", async (userInfo) => {
  const response = await axios.get(
    "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json"
  );
  const fetchedUsers = response.data;
  console.log("user fetched");
  console.log(Object.values(fetchedUsers));
  console.log(userInfo.userEmail);
  const user = Object.values(fetchedUsers).find(
    (u) =>
      u.userEmail === userInfo.userEmail &&
      u.userPassword === userInfo.userPassword
  );
  console.log("user checked");
  if (user) {
    return true;
  } else {
    throw new Error("Authentication Failed!");
  }
});

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
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isLoggedIn = true;
        console.log("Authenticated!");
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
