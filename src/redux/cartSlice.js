'use client';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add(state, action) {
            // pushea los products al array del cart
            state.push(action.payload);
        },
        remove(state, action) {
            // devuelve todos los items que hayan con distinto id al que queremos remover
            return state.filter(item => item.id !== action.payload)
        }

    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;