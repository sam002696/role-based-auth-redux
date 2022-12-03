import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userRegisterReducer from "./userRegisterSlice";
import tenantPropertyDetailsReducer from "./tenantPropertySlice";
import maintenanceReportsReducer from "./allReportsSlice";
import contractorCurrentJobsReducer from "./contractorJobsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // blacklist: ["maintenanceReportsReducer"],
};

const rootReducer = combineReducers({
  user: userReducer,
  userRegister: userRegisterReducer,
  tenantPropertyDetails: tenantPropertyDetailsReducer,
  maintenanceReports: maintenanceReportsReducer,
  contractorCurrentJobs: contractorCurrentJobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
