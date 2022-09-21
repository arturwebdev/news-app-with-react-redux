import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    pages: [],
    currentPage: 1,
  },

  reducers: {

    setCurrentPage(state, { payload }) {
      console.log(payload * 10);
      console.log((payload - 1) * 10);
      return {
        ...state,
        currentPage: payload,
      };
    },

    setPages(state, { payload }) {
      const currentPages = [];
      for (let i = 1; i <= payload / 10; i++) {
        currentPages.push({
          page: "" + i,
          id: Math.random().toString(),
        });
      }
      return {
        ...state,
        pages: currentPages,
      };
    },

  },

})
 
export const selectPages = state => state.pages;

export const { setCurrentPage, setPages } = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;
