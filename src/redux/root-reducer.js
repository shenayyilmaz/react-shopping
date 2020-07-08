import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cardReducer from "./card/card.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["card"],
};

export default persistReducer(persistConfig, rootReducer);
