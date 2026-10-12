// import { createSlice } from '@reduxjs/toolkit'

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cartData: [],
//         amount: 0,
//         c_gst_9: 0,
//         s_gst_9: 0,
//         Total: 0,
//         inr: 0,
//         selectedCategory: "" // "" = All Products
//     },

//     reducers: {
//         addTocart: (state, action) => {
//             state.cartData.push(action.payload)

//             state.amount = state.cartData.reduce(
//                 (sum, item) => sum + Math.round(item.price), 0
//             )
//             state.c_gst_9 = Number((state.amount * 9 / 100).toFixed(2))
//             state.s_gst_9 = Number((state.amount * 9 / 100).toFixed(2))
//             state.Total = Math.round(state.amount + state.c_gst_9 + state.s_gst_9)
//             state.inr = state.Total * 94
//         },

//         setCategory: (state, action) => {
//             state.selectedCategory = action.payload
//         }
//     },
// })

// export const { addTocart, setCategory } = cartSlice.actions

// export default cartSlice.reducer



import { createSlice } from '@reduxjs/toolkit'

const recalculate = (state) => {
    state.amount = state.cartData.reduce(
        (sum, item) => sum + Math.round(item.price) * item.qty, 0
    )
    state.c_gst_9 = Number((state.amount * 9 / 100).toFixed(2))
    state.s_gst_9 = Number((state.amount * 9 / 100).toFixed(2))
    state.Total = Number((state.amount + state.c_gst_9 + state.s_gst_9).toFixed(2))
    state.inr = Number((state.Total * 94).toFixed(2))
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: [],
        amount: 0,
        c_gst_9: 0,
        s_gst_9: 0,
        Total: 0,
        inr: 0,
        selectedCategory: "" // "" = All Products
    },

    reducers: {
        addTocart: (state, action) => {
            const existing = state.cartData.find(
                (item) => item.id === action.payload.id
            )

            if (existing) {
                existing.qty += 1
            } else {
                state.cartData.push({ ...action.payload, qty: 1 })
            }

            recalculate(state)
        },

        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
})

export const { addTocart, setCategory } = cartSlice.actions

export default cartSlice.reducer