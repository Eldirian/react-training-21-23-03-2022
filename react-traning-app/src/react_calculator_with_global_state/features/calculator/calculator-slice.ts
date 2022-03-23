import { createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
    history: string[]
}

const initialState: CalculatorState = {
    history: []
}

interface AddToHistoryAction {
    payload: string;
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addToHistory: (state, action: AddToHistoryAction) => {
            state.history.push(action.payload);
        },
        clearHistory: (state) => {
            state.history = []
        }
    }
})

export const { addToHistory, clearHistory } = calculatorSlice.actions;