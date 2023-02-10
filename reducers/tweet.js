import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweetToStore: (state, action) => {
      state.value.push(action.payload);
    },
    removeTweetFromStore: (state, action) => {
      state.value = state.value.filter(
        (tweet) => tweet.id !== action.payload.id
      );
    },
  },
});

export const { addTweetToStore, removeTweetFromStore } = tweetSlice.actions;
export default tweetSlice.reducer;
