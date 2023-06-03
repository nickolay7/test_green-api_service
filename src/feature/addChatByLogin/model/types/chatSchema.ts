import {IServerMessage} from "../../../../types";

type Login = string;

export type Chats = Record<Login, IServerMessage[]>;

export interface ChatSchema {
    chats: Chats;
    currentChat?: string;
}