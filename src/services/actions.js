import { createSlice } from '@reduxjs/toolkit'
export const erpobject = createSlice({
    name: 'userobject',
    initialState: {
        value: {
            user: null,
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.value.user = action.payload
        },
        setClear: (state, action) => {
            state.value.user = null;
        },

    },
});

export const { setUser, setClear } = erpobject.actions;
export default erpobject.reducer 
