import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { variablesActions, variablesReducer } from "./slices/variablesSlice";

const rootReducer = combineReducers({
	variables: variablesReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	/** Allows Redux to be debugged in the browser, modify with an env variable */
	devTools: true,
});

/** Root state of the store */
type RootState = ReturnType<typeof rootReducer>;

/** Hook for accessing all fields on the Redux store */
export const useStore = (): RootState => useSelector((state: RootState) => state);

/** App Dispatch type for the store */
type AppDispatch = typeof store.dispatch;

/** All actions in the store */
const actions = {
	...variablesActions,
};

/** Hook for accessing and dispatching all actions on the Redux store */
export const useActions = () => {
	const dispatch = useDispatch<typeof store.dispatch>();
	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
