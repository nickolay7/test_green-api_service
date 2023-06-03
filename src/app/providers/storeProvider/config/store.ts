import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema } from "./stateSchema";
import {authReducer} from "feature/authByToken";
import {addChatReducer} from "feature/addChatByLogin";
import {$api} from "shared/api/api";
import {messageExchangeReducer} from "feature/messageExchange/model/slice/messageExchangeSlice";

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		authData: authReducer,
		chatsData: addChatReducer,
		messageExchange: messageExchangeReducer,
	};

	return configureStore({
		reducer: rootReducer,
		devTools: true,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			})
	});
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
