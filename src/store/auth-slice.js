import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggedIn: false,
  error: "",
};

export const login = createAsyncThunk("authslice/login", async (userInfo) => {
  const response = await axios.get(
    "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json"
  );
  const fetchedUsers = response.data;
  const user = Object.values(fetchedUsers).find(
    (u) =>
      u.userEmail === userInfo.userEmail &&
      u.userPassword === userInfo.userPassword
  );

  console.log("user checked");
  if (user) {
    return true;
  } else {
    throw new Error("Invalid Credentials");
  }
});

export const register = createAsyncThunk(
  "authslice/register",
  async (userInfo) => {
    const response = await axios.get(
      "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json"
    );
    const fetchedUsers = response.data;
    const userEmailUsed = Object.values(fetchedUsers).find(
      (u) => u.userEmail === userInfo.userEmail
    );

    if (userEmailUsed) {
      throw new Error("Email already used");
    } else {
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
    }
  }
);

const AuthSlice = createSlice({
  name: "authslice",
  initialState: authInitialState,
  reducers: {
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
        state.error = "Invalid Credentials";
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoggedIn = true;
        console.log("Registered and logged in");
      })
      .addCase(register.rejected, (state, action) => {
        state.error = "email already exist";
        console.log(action.error.message);
      });
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
