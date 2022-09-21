import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pagesReducer } from "./slices/pages/pagesSlice";
import { inputsReducer } from "./slices/inputs/inputsSlice";
import postsReducer from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/search/searchSlice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  search: searchReducer,
    pages: pagesReducer,
    inputs: inputsReducer,
    posts: postsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

 export const persistor = persistStore(store)

export default store;
