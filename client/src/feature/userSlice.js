import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { customFetch } from "../utilsClient"

const initialState = {
    user: null,
    userLoading: false,
    userSubmitting: false,
    onlineUsers: [],
}

export const loginUser = createAsyncThunk("user/login", 
    async (data, thunkAPI) => {
       
        try {
            const resp = await customFetch.post("/login", data)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const registerUser = createAsyncThunk("user/register", 
    async (data, thunkAPI) => {
       
        try {
            const resp = await customFetch.post("/register", data)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const getUser = createAsyncThunk("user/getUser", 
    async (_, thunkAPI) => {
       
        try {
            const resp = await customFetch.get("/getuser")
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const logoutUser = createAsyncThunk("user/logout", 
    async (_, thunkAPI) => {
       
        try {
            const resp = await customFetch.post("/api/logout")

            

            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const getLastSeen = createAsyncThunk("user/getLastSeen", 
    async (recipientId, thunkAPI) => {
       
        try {
            const resp = await customFetch.get(`/getlastseen/${recipientId}`)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const addToWishList = createAsyncThunk("user/addToWishList",
    async (productId, thunkAPI) => {
        try {
            const resp = await customFetch.patch(`/addtowishlist/${productId}`)
            thunkAPI.dispatch(getUser())
            return resp?.data?.msg
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: JSON.parse(localStorage.getItem("user")) || initialState,
    reducers: {
        resetUser: (state, action) => {
            return initialState
        },
        addOnlineUser: (state, {payload}) => {
                    if (!state.onlineUsers.includes(payload)){
                        state.onlineUsers.push(payload)
                    }
        
                    localStorage.setItem("user", JSON.stringify(state))
                },
        removeOnlineUser: (state, {payload}) => {
                    state.onlineUsers = state.onlineUsers.filter(id => id !== payload)
        
                    localStorage.setItem("user", JSON.stringify(state))
                }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, {payload}) => {
            state.userSubmitting = true
        }).addCase(loginUser.fulfilled, (state, {payload}) => {
            state.userSubmitting = false
            // state.token = payload.token
            state.user = payload?.theUser
            
            localStorage.setItem("user", JSON.stringify(state))
            // toast.success("logged In!")
        }).addCase(loginUser.rejected, (state, {payload}) => {
            state.userSubmitting = false
            // toast.error(payload)
        }).addCase(registerUser.pending, (state, {payload}) => {
            state.userSubmitting = true
        }).addCase(registerUser.fulfilled, (state, {payload}) => {
            state.userSubmitting = false
        }).addCase(registerUser.rejected, (state, {payload}) => {
            state.userSubmitting = false
            // toast.error(payload)
        }).addCase(logoutUser.pending, (state, {payload}) => {
            state.userSubmitting = true
        }).addCase(logoutUser.fulfilled, (state, {payload}) => {
            state.userSubmitting = false
        }).addCase(logoutUser.rejected, (state, {payload}) => {
            state.userSubmitting = false
            // toast.error(payload)
        }).addCase(getUser.pending, (state, {payload}) => {
            state.userLoading = true
        }).addCase(getUser.fulfilled, (state, {payload}) => {
            state.userLoading = false
            // state.token = payload.token
            state.user = payload?.theUser
            
            localStorage.setItem("user", JSON.stringify(state))
            // toast.success("logged In!")
        }).addCase(getUser.rejected, (state, {payload}) => {
            state.userLoading = false
            // toast.error(payload)
        }).addCase(getLastSeen.pending, (state, {payload}) => {
            state.userSubmitting = true
        }).addCase(getLastSeen.fulfilled, (state, {payload}) => {
            state.userSubmitting = false
        }).addCase(getLastSeen.rejected, (state, {payload}) => {
            state.userSubmitting = false
            // toast.error(payload)
        }).addCase(addToWishList.pending, (state, {payload}) => {
            state.userSubmitting = true
        }).addCase(addToWishList.fulfilled, (state, {payload}) => {
            state.userSubmitting = false
        }).addCase(addToWishList.rejected, (state, {payload}) => {
            state.userSubmitting = false
            // toast.error(payload)
        })
    }
})

export const {resetUser, addOnlineUser, removeOnlineUser} = userSlice.actions

export default userSlice.reducer