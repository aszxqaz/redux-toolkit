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
    },
})

export const { inceremented } = counterSlice.actions
export default counterSlice.reducer