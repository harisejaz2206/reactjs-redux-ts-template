import { combineReducers } from "redux";
import { ThunkDispatch, AnyAction, Store } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  //   auth: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
