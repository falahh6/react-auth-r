import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const authInitialState = {
  isLoggedIn: false,
  error: "",
  currentlyLoggedInUserKey: "",
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

  const userKey = Object.keys(fetchedUsers).find((key) => {
    const u = fetchedUsers[key];
    return (
      u.userEmail === userInfo.userEmail &&
      u.userPassword === userInfo.userPassword
    );
  });

  console.log(userKey, user);

  console.log("user checked");
  if (user) {
    return userKey;
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

// export const addResources = createAsyncThunk(
//   "authslice/addResources",
//   async (data) => {
//     const { message, CurrentUserKey } = data;
//     try {
//       const response = await axios.patch(
//         "https://users-6b489-default-rtdb.firebaseio.com/NewUsers.json/" +
//           CurrentUserKey +
//           "/message",
//         message
//       );

//       if (!response.data) {
//         throw new Error("Cannot store your message!");
//       } else {
//         console.log(response);
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

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
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.currentlyLoggedInUserKey = action.payload;
        // console.log(action.payload);
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
    // .addCase(addResources.fulfilled, () => {
    //   console.log("successfully stored data");
    // })
    // .addCase(addResources.rejected, (state, action) => {
    //   console.log(action.error.message);
    // });
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
