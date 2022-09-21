import { createSlice } from "@reduxjs/toolkit";

const inputsSlice = createSlice({
  name: 'inputs',
  initialState: {
    name: '',
    comment: ''
  },

  reducers: {
    setName(state, {payload}){
      return {
        ...state, 
        name: payload
      }
    },
    
    setComment(state, {payload}) {
      return {
        ...state,
        comment: payload
      }
    }
  }
})

export const selectInputs = state => state.inputs
export const {setName, setComment} = inputsSlice.actions
export const inputsReducer = inputsSlice.reducer