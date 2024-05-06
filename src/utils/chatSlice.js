import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= OFFSET_LIVE_CHAT) {
                // If it does, remove the first message (FIFO)
                state.messages.shift();
            }
            state.messages.push(action.payload);
        },
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;