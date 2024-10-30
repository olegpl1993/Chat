/* eslint-disable no-console */
import { io, Socket } from "socket.io-client";
import { create } from "zustand";
import { BASE_URL } from "../../shared/constants/urls";
import { ChatMessageType } from "./chat.types";

interface Store {
  socket: Socket | null;
  messages: ChatMessageType[];

  connectSocket: () => void;
  disconnectSocket: () => void;
  sendMessage: (message: string, userName: string) => void;
}

export const useChatStore = create<Store>((set, get) => ({
  socket: null,
  messages: [],
  selectedChat: null,

  connectSocket: () => {
    const newSocket = io(BASE_URL);

    newSocket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    newSocket.on("chat message", (res: ChatMessageType) => {
      set((state) => ({ messages: [...state.messages, res] }));
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    set({ socket: newSocket });
  },

  disconnectSocket: () => {
    const { socket } = get();
    if (!socket) return;

    socket.close();
    set({ socket: null });
  },

  sendMessage: (message: string, userName: string) => {
    const { socket } = get();
    if (!socket) return;

    const chatMessage: ChatMessageType = {
      message,
      name: userName,
    };

    socket.emit("chat message", chatMessage, () => {
      set((state) => ({ messages: [...state.messages, chatMessage] }));
    });
  },
}));
