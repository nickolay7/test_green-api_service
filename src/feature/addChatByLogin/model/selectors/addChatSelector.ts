import {StateSchema} from "app/providers/storeProvider/config/stateSchema";

export const getCurrentChatLogin = (state: StateSchema) => state.chatsData.currentChat;
export const getChats = (state: StateSchema) => state.chatsData.chats;