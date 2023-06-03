export type Status = "read" | "sent";

export interface IServerMessage {
  avatar: string;
  message: string;
  id: number;
  date: string;
  is: "my" | "her";
  status?: Status;
}

export interface ITitleMessage {
  type: "title";
  id: string;
  date: string;
}

export interface IMessageItem {
  text: string;
  status: Status;
  id: number;
  date: string;
}

export interface IMessage {
  type: "message";
  id: string;
  avatar: string;
  isReverse: boolean;
  isRemovable: boolean;
  messages: IMessageItem[];
}

export interface Notification {
  "receiptId": number,
  "body": {
    "typeWebhook": string,
    "instanceData": {
      "idInstance": number,
      "wid": string,
      "typeInstance": "whatsapp"
    },
    "timestamp": number,
    "idMessage": string,
    "senderData": {
      "chatId": string,
      "sender": string,
      "senderName": string
    },
    "messageData": {
      "typeMessage": "textMessage",
      "textMessageData": {
        "textMessage": string
      }
    }
  }
}
