import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getId = (state: StateSchema) => state.authData.id;
export const getToken = (state: StateSchema) => state.authData.token;
export const getLogin = (state: StateSchema) => state.authData.login;
