import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
