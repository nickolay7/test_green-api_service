import {createSlice} from "@reduxjs/toolkit";
import {MessageExchangeSchema} from "../types/messageExchangeSchema";
import {sendMessage} from "../services/sendMessage";
import {getMessage} from "../services/getMessage";

const initialState: MessageExchangeSchema = {
    isLoading: false,
    sendingError: undefined,
    gettingError: undefined
};

export const messageExchangeSlice = createSlice({
    name: "@@messageExchange",
    initialState,
    reducers: {
        resetError: (state) => {
            state.gettingError = undefined;
            state.sendingError = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state) => {
            state.sendingError = undefined;
            state.isLoading = true;
        });
        builder.addCase(sendMessage.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.sendingError = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getMessage.pending, (state) => {
            state.gettingError = undefined;
            state.isLoading = true;
        });
        builder.addCase(getMessage.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(getMessage.rejected, (state, action) => {
            state.gettingError = action.payload;
            state.isLoading = false;
        });
    },
});

export const { resetError } = messageExchangeSlice.actions;
export const messageExchangeReducer = messageExchangeSlice.reducer;
