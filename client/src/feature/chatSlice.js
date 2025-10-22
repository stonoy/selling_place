import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { chatList, customFetch } from "../utilsClient"

const initialState = {
    chatHeads: [],
    theChat: null,
    isLoading: false,
    isSubmitting: false,
}

export let getChatHeads = createAsyncThunk("chat/getChatHeads",
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get("/getchatheads")
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export let getTheChat = createAsyncThunk("chat/getTheChat",
    async (chatId, thunkAPI) => {
        try {
            const resp = await customFetch.get(`/getthechat/${chatId}`)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const createChat = createAsyncThunk("chat/createChat",
    async (toUserId, thunkAPI) => {
        try {
            const resp = await customFetch.post("/createchat", {toUserId})
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const removeFromActiveChatList = createAsyncThunk("chat/removeFromActiveChatList",
    async (chatId,thunkAPI) => {
        try {
            const resp = await customFetch.patch(`/removefromchatactive/${chatId}`)
            return resp?.data?.msg
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

const chatSlice = createSlice({
    name: "chat",
    initialState: JSON.parse(localStorage.getItem("chat")) || initialState,
    reducers: {
        addLastMsgViaSocket: (state, {payload}) => {
            state.chatHeads = state.chatHeads.map(chat => {
                if (chat._id === payload.chatId){
                    return {...chat, lastMessage: payload.newMessage}
                } else {
                     return chat
                }
            })

            localStorage.setItem("chat", JSON.stringify(state))
        },
        addNewMessageViaSocket: (state, {payload: {chatId, newMessage}}) => {
            if (state.theChat?._id === chatId){
                state.theChat.messages.push(newMessage)
            }

            localStorage.setItem("chat", JSON.stringify(state))
        },
        updateLastMsgSeen: (state, {payload: {chatId, userOpenerId}}) => {
            state.chatHeads = state.chatHeads.map(head => {
                if (head._id === chatId && head?.lastMessage && head.lastMessage.sender !== userOpenerId){
                    const modifiedLastMsg = {...head.lastMessage, seen: true}
                    return {...head, lastMessage: modifiedLastMsg}
                } else {
                    return head
                }
            })
        },
        updateMsgsSeen: (state, {payload: {chatId, userOpenerId}}) => {
            if (state.theChat?._id === chatId){
                state.theChat.messages = state.theChat.messages.map(msg => {
                if (msg.sender !== userOpenerId){
                    return {...msg, seen: true}
                } else {
                    return msg
                }
            })

            if (state.theChat?.lastMessage && state.theChat.lastMessage.sender !== userOpenerId){
                state.theChat.lastMessage.seen = true
            }
            }
        },
        setTyping: (state, {payload: { chatId}}) => {
            state.chatHeads = state.chatHeads.map(head => {
                if (head._id === chatId){
                    return {...head, typing: true}
                } else {
                    return head
                }
            })
        },
        removeTyping: (state, {payload: { chatId}}) => {
            state.chatHeads = state.chatHeads.map(head => {
                if (head._id === chatId){
                    return {...head, typing: false}
                } else {
                    return head
                }
            })
        },
        resetChat: (state, action) => {
                    return initialState
                },
        
    },
    extraReducers: (builder) => {
        builder.addCase(createChat.pending, (state, action) => {
            state.isSubmitting = true
        }).addCase(createChat.fulfilled, (state, action) => {
            state.isSubmitting = false
        }).addCase(createChat.rejected, (state, action) => {
            state.isSubmitting = false
        }).addCase(getTheChat.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getTheChat.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.theChat = payload?.theChat
            localStorage.setItem("chat", JSON.stringify(state))
        }).addCase(getTheChat.rejected, (state, action) => {
            state.isLoading = false
        }).addCase(getChatHeads.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getChatHeads.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.chatHeads = payload?.myChatHeads
            localStorage.setItem("chat", JSON.stringify(state))
        }).addCase(getChatHeads.rejected, (state, action) => {
            state.isLoading = false
        }).addCase(removeFromActiveChatList.pending, (state, action) => {
            state.isSubmitting = true
        }).addCase(removeFromActiveChatList.fulfilled, (state, action) => {
            state.isSubmitting = false
        }).addCase(removeFromActiveChatList.rejected, (state, action) => {
            state.isSubmitting = false
        })
    }
})

export const {addLastMsgViaSocket, addNewMessageViaSocket, updateLastMsgSeen, updateMsgsSeen, setTyping, removeTyping, resetChat} = chatSlice.actions

export default chatSlice.reducer