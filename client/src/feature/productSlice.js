import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { customFetch, makeQueryUrl } from "../utilsClient"

const initialState = {
    products: [],
    loading: false,
    submitting: false,
    categoryObj: {},
    productTypes: ["Laptop", "Mobile", "Car", "Bike"],
    locations: [],
    queryObj: {}, // based on the query obj, url quries created inside getProducts
    theProduct: null,
    suggestions: [],
    myProducts: [],
    page: 1, // later implement pagination
    numOfPages: 1,
}

export const getSingleProduct = createAsyncThunk("product/getSingleProduct",
    async (id, thunkAPI) => {
        try {
            const resp = await customFetch.get(`getsingleproduct/${id}`)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const getProducts = createAsyncThunk("product/getProducts",
    async (_, thunkAPI) => {
        let {queryObj, page} = thunkAPI.getState().product
    
        try {
            const resp = await customFetch.get(makeQueryUrl("/getproducts", queryObj))
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const getSuggestions = createAsyncThunk("product/getSuggestions",
    async (search, thunkAPI) => {
    
        try {
            const resp = await customFetch.get(`/getsuggestions?search=${search}`)
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const addProduct = createAsyncThunk("product/addProduct", 
    async (form, thunkAPI) => {
        try {
            const resp = await customFetch.post("/addproduct", form)
            return resp?.data?.msg
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)

export const getMyProducts = createAsyncThunk("product/getMyProducts",
    async (_, thunkAPI) => {
    
        try {
            const resp = await customFetch.get("/getmyproducts")
            return resp?.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg)
        }
    }
)



const productSlice = createSlice({
    name: "product",
    initialState : JSON.parse(localStorage.getItem("product")) || initialState,
    reducers: {
        landingMakeQuery: (state, {payload}) => {
            // for location and search, del others if any
            state.queryObj = {...state.queryObj, ...payload}

            delete state.queryObj.type
            delete state.queryObj.typeSpecificLocation
            delete state.queryObj.priceRange

            localStorage.setItem("product", JSON.stringify(state))
        },
        filterMakeQuery: (state, {payload}) => {
            // for type, price and other filters, del others if any
            state.queryObj = {...state.queryObj, ...payload}

            delete state.queryObj.location
            delete state.queryObj.search

            localStorage.setItem("product", JSON.stringify(state))
        },
        delQuery: (state, {payload}) => {
            const newObj = {}
           

            for(let key in state.queryObj){
                if (key !== payload){
                    newObj[key] = state.queryObj[key]
                }
            }

            state.queryObj = newObj

            localStorage.setItem("product", JSON.stringify(state))
        },
        resetFilters: (state, {payload}) => {
            state.queryObj = {}

            localStorage.setItem("product", JSON.stringify(state))
        },
        resetSuggestions: (state, action) => {
            state.suggestions = []

            // localStorage.setItem("product", JSON.stringify(state))
        },
        setPage: (state, {payload}) => {
            if (payload >= state.numOfPages){return}

            state.page = payload
        },
        resetProducts: (state, action) => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, {payload}) =>{
            state.loading = true
        }).addCase(getProducts.fulfilled, (state, {payload}) =>{
            state.loading = false
            state.products = payload?.products
            state.categoryObj = payload?.products.reduce((total, product) => {
                if (total[product.category]){
                    if (!total[product.category].includes(product.type)){
                    total[product.category].push(product.type)
                }
                } else {
                    total[product.category] = [product.type]
                }
                return total
            }, state.categoryObj)
            payload?.products.forEach(product => {
                if (!state.productTypes.includes(product.type)){
                    state.productTypes.push(product.type)
                }

                if (!state.locations.includes(product.location.split(",")[0])){
                    state.locations.push(product.location.split(",")[0])
                }
            })

            localStorage.setItem("product", JSON.stringify(state))
        }).addCase(getProducts.rejected, (state, {payload}) =>{
            state.loading = false
            console.log(payload)
        }).addCase(getSingleProduct.pending, (state, {payload}) =>{
            state.loading = true
        }).addCase(getSingleProduct.fulfilled, (state, {payload}) =>{
            state.loading = false
            state.theProduct = payload?.theProduct
            
            localStorage.setItem("product", JSON.stringify(state))
        }).addCase(getSingleProduct.rejected, (state, {payload}) =>{
            state.loading = false
            console.log(payload)
        }).addCase(getSuggestions.pending, (state, {payload}) =>{
            state.loading = true
        }).addCase(getSuggestions.fulfilled, (state, {payload}) =>{
            state.loading = false
            state.suggestions = payload?.suggestions
            
            localStorage.setItem("product", JSON.stringify(state))
        }).addCase(getSuggestions.rejected, (state, {payload}) =>{
            state.loading = false
            console.log(payload)
        }).addCase(addProduct.pending, (state, {payload}) =>{
            state.submitting = true
        }).addCase(addProduct.fulfilled, (state, {payload}) =>{
            state.submitting = false
        }).addCase(addProduct.rejected, (state, {payload}) =>{
            state.submitting = false
            console.log(payload)
        }).addCase(getMyProducts.pending, (state, {payload}) =>{
            state.loading = true
        }).addCase(getMyProducts.fulfilled, (state, {payload}) =>{
            state.loading = false
            state.myProducts = payload?.myProducts
            
            localStorage.setItem("product", JSON.stringify(state))
        }).addCase(getMyProducts.rejected, (state, {payload}) =>{
            state.loading = false
            console.log(payload)
        })
    }
})

export const {landingMakeQuery, filterMakeQuery, delQuery, resetFilters, resetSuggestions, setPage, resetProducts} = productSlice.actions

export default productSlice.reducer