import { createSlice } from "@reduxjs/toolkit/dist/createSlice";


initialCounter = {counter: 0, showCounter: false}
const counterSlice = createSlice({
    name: counter,
    initialCounter : 0,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter + state.action;
        },
        toggle(state) {
            state.showCounter = !showCounter
        }
    }

    const store = ceareStore(counterSlice.reducers)

})