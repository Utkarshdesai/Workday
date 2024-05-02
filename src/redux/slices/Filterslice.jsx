import { createSlice } from "@reduxjs/toolkit"; 

//initial state 
const initialState = {
    role : '' ,
    location : '' ,
    minexp : '' ,
    InOffice : '',
    Basepay : '' ,
}

// update function for state
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setrole : (state ,action) => {
        state.role = action.payload 
      },
      setlocation : (state ,action) => {
        state.location = action.payload
      },
      setexp : (state , action) => {
        state.minexp = action.payload
      },
      setremote : (state, action)=>{
        state.InOffice  = action.payload
      },
      setbasepay : (state, action) => {
        state.Basepay = action.payload
      }
    },
  })
  
  
  export const { setrole, setlocation ,setexp, setremote,setbasepay} = filterSlice.actions
  
  export default filterSlice.reducer