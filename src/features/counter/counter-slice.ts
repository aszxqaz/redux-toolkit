import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inceremented(state) {
            state.value++
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    },
})

export const { inceremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer