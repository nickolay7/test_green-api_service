import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ChatSchema} from "../types/chatSchema";
import {IServerMessage} from "../../../../types";

const initialState: ChatSchema = {
    chats: {},
    currentChat: '',
};

export const addChatSlice = createSlice({
    name: "@@addChat",
    initialState,
    reducers: {
        addChat: (state, action: PayloadAction<string>) => {
            if (!state.chats[action.payload]) {
                state.chats[action.payload] = [];
                state.currentChat = action.payload;
            } else {
                state.currentChat = action.payload;
            }
        },
        setCurrentChat: (state, action: PayloadAction<string>) => {
            state.currentChat = action.payload;
        },
        addMessageToCurrentChat: (state, action: PayloadAction<IServerMessage>) => {
            if (state.currentChat) {
                state.chats[state.currentChat].push(action.payload);
            }
        }
    },
});

export const { addChat, addMessageToCurrentChat, setCurrentChat } = addChatSlice.actions;

export const addChatReducer = addChatSlice.reducer;
