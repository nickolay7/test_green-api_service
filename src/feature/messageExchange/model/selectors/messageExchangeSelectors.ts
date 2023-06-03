import {StateSchema} from "app/providers/storeProvider";

export const getSendMessageSelector = (state: StateSchema) => state.messageExchange.sendingError;
export const getGetMessageSelector = (state: StateSchema) => state.messageExchange.gettingError;