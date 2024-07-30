import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../src/formslice'

export const store = configureStore ({
    reducer: {
        form:formReducer
    }
})

export default store