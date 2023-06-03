import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {addMessageToCurrentChat} from "../../../addChatByLogin";
import {getId, getToken} from "../../../authByToken/model/selectors/authSelectors";

export const getMessage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('@@getMessage', async (_, thunkApi) => {
    const {
        extra: { api },
        rejectWithValue,
        getState,
        dispatch
    } = thunkApi;

    const instanceId = getId(getState());
    const token = getToken(getState());

    try {
        const { data } = await api.get(`/waInstance${instanceId}/receiveNotification/${token}`);

        if (!data) {
            throw new Error('error');
        }

        const {
            receiptId,
            body: {
                senderData: { senderName },
                // messageData: { textMessageData: { textMessage } },
                timestamp,
            }
        } = data;

        await api.delete(`/waInstance${instanceId}/deleteNotification/${token}/${receiptId}`);

        const normalizedData = {
            id: timestamp,
            avatar:
                senderName,
            message: data?.body?.messageData?.textMessageData?.textMessage || 'has not text message',
            date: new Date().toISOString(),
            is: "her" as const,
        }

        dispatch(addMessageToCurrentChat(normalizedData));
    } catch (e) {
        return rejectWithValue('error');
    }
});
