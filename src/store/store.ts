import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: ["store", "outlet", "banner", "users"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor, store };

// Purpose: This file is responsible for creating and configuring the Redux store.

// configureStore: A function provided by Redux Toolkit that creates a store with good defaults, like enabling the Redux DevTools extension and setting up middleware like redux-thunk.
// reducer: The root reducer of the application, which combines all the individual slices of the state.
