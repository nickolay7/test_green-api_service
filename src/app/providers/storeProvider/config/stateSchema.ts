import {LoginSchema} from "feature/authByToken/model/types/loginSchema";
import {ChatSchema} from "feature/addChatByLogin/model/types/chatSchema";
import {AxiosInstance} from "axios";
import {MessageExchangeSchema} from "feature/messageExchange/model/types/messageExchangeSchema";

export interface StateSchema {
	authData: LoginSchema;
	chatsData: ChatSchema;
	messageExchange: MessageExchangeSchema;
}

export interface ThunkExtraArgs {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	extra: ThunkExtraArgs;
	rejectValue: T;
	state: StateSchema;
}