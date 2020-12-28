import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persitedReducer,
  applyMiddleware(promiseMiddleware, logger)
);

const persistor = persistStore(store);

export { store, persistor };
