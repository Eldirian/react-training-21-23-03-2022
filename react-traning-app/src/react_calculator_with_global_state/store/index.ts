import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "../features/calculator/calculator-slice";

const store = configureStore({
    reducer: {
        calculator: calculatorSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export { store }