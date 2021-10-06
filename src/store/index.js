import {createAsyncThunk, createSlice, configureStore}  from '@reduxjs/toolkit'


const fetchPokemonsData = createAsyncThunk("pokemons/fetchPokemonsData",
async () => {
   try  {
       const response = await fetch("https://pokeapi.co/api/v2/")
       const data = await response.json()
       return data
   }
   catch (error) {
    throw Error(error)
}
}
)

const pokemonsSlice = createSlice({
    name : "pokemons",
    initialState:{
        isLoading:false,
        pokemons:[],
        error:false
    },
    reducers:{},
    extraReducers:{
        [fetchPokemonsData.pending] : (state) =>{
            state.isLoading = "PENDING"
        },
        [fetchPokemonsData.fulfilled]: (state, action) => {
            state.isLoading = "FULFILLED";
            state.pokemons = action.payload

        },
        [fetchPokemonsData.rejected]: (state) => {
            state.isLoading = "REJECTED";
            state.error = true
        }

    }
})


const store = configureStore({
    reducer:{
        pokemoms:pokemonsSlice.reducer
    }
})


export default store
