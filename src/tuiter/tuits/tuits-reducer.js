import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
 };

 const initialState = {
  tuits: [],
  loading: false
 }
 
 const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
 }
 

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 reducers: {
  likeButtonToggle(state, action) {
    const tuit = state.find((tuit) => tuit._id === action.payload._id)
    tuit.liked ? tuit.likes-- : tuit.likes++;
    tuit.liked = !tuit.liked;
  },
  createTuit(state, action) {
    state.unshift({
      ...action.payload,
      ...templateTuit,
      _id: (new Date()).getTime(),
    })
  },
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuit =>
          tuit._id === action.payload);
    state.splice(index, 1);
  },
 },
 extraReducers: {
  [findTuitsThunk.pending]:
     (state) => {
        state.loading = true
        state.tuits = []
  },
  [findTuitsThunk.fulfilled]:
     (state, { payload }) => {
        state.loading = false
        state.tuits = payload
  },
  [findTuitsThunk.rejected]:
     (state, action) => {
        state.loading = false
        state.error = action.error
  },
  [deleteTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    state.tuits = state.tuits
      .filter(t => t._id !== payload)
  },
  [createTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    state.tuits.push(payload)
},

[updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }

},
});

export const { likeButtonToggle, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;