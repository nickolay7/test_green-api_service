import {createSlice, DeepPartial} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {LoginSchema} from "../types/loginSchema";

const initialState: LoginSchema = {
	id: "",
	token: "",
	login: "",
};

export const authSlice = createSlice({
	name: "@@auth",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<DeepPartial<LoginSchema>>) => {
			return { ...state, ...action.payload };
		},
		setAuthLogin: (state, action: PayloadAction<DeepPartial<LoginSchema>>) => {
			return  { ...state, ...action.payload };
		},
		reAuth: () => {
			return  initialState;
		},
	},
});

export const { setAuthData, setAuthLogin, reAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
