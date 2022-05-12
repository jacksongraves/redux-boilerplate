import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** */
export interface VariablesState {
	/** An ordered list of variables with metadata based on control flow logic */
	variables: unknown[];

	/** An evaluated object of variables based on control flow logic */
	evaluatedVariables: {
		[variable: string]: string;
	};

	/** The currently selected variable for editing purposes */
	selectedVariable: unknown | null;

	/** Temporary tracking state if we make state dependent on async calls */
	loading?: boolean;

	/** Store any errors thrown during actions or state changes */
	error?: null;

	/** Timestamp to track any actions or state changes */
	updatedAt?: number;
}

/** */
export const variablesInitialState: VariablesState = {
	loading: false,
	error: null,
	updatedAt: 1,
	selectedVariable: null,
	variables: [],
	evaluatedVariables: {},
};

/** */
export const variablesMockState: VariablesState = {
	loading: false,
	error: null,
	updatedAt: 1,
	selectedVariable: null,
	variables: [],
	evaluatedVariables: {},
};

/** */
export const variablesSlice = createSlice({
	name: "variables",
	initialState: variablesInitialState,
	reducers: {
		/** */
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		/** Actions follow a general pattern */
		performAction: (state, action: PayloadAction<unknown>) => {
			// state.loading = action.payload;
			// State updates
		},
	},
});

/** Alias for actions */
export const variablesActions = variablesSlice.actions;

/** Alias for reducers */
export const variablesReducer = variablesSlice.reducer;
