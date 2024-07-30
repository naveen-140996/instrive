import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        businessDetails:{},
        contactDetails:{}
    },
    reducers:{
        setBusinessDetails : (state,action) => {
            state.businessDetails = action.payload;
    },
    setContactDetails : (state,action) => {
        state.contactDetails = action.payload;
    }
}
})
export const { setBusinessDetails , setContactDetails} = formSlice.actions;

export default formSlice.reducer