import { UserActyionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActyionTypes.SET_CURRENT_USER,
  payload: user,
});
