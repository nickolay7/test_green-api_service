import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {getCurrentChatLogin} from "../../../addChatByLogin/model/selectors/addChatSelector";
import {IServerMessage} from "../../../../types";
import {addMessageToCurrentChat} from "../../../addChatByLogin";
import {getId, getToken} from "../../../authByToken/model/selectors/authSelectors";

export const sendMessage = createAsyncThunk<
    void,
    string,
    ThunkConfig<string>
>('@@sendMessage', async (text, thunkApi) => {
    const {
        extra: { api },
        rejectWithValue,
        getState,
        dispatch
    } = thunkApi;

    const currentChatLogin = getCurrentChatLogin(getState());
    const instanceId = getId(getState());
    const token = getToken(getState());

    if (!currentChatLogin || !text) {
        return rejectWithValue('no data');
    }

    try {
        const message = {
            "chatId": `${currentChatLogin}@c.us`,
            "message": text,
        };

        const response = await api.post(`/waInstance${instanceId}/sendMessage/${token}`, message);

        if (!response.data) {
            throw new Error('error');
        }

        const localMessage = {
            id: Date.now(),
            avatar:
                "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
            message: text,
            date: new Date().toISOString(),
            is: "my",
            status: "sent",
        } as IServerMessage;

        dispatch(addMessageToCurrentChat(localMessage));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
