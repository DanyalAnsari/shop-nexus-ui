import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItems = {
  [productId: string]: number;
};

interface CartState {
  total: number;
  cartItems: CartItems;
}

const initialState: CartState = {
  total: 0,
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      
      if (state.cartItems[productId]) {
        state.cartItems[productId]++;
      } else {
        state.cartItems[productId] = 1;
      }
      state.total += 1;
    },
    
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      
      if (state.cartItems[productId]) {
        state.cartItems[productId]--;
        if (state.cartItems[productId] === 0) {
          delete state.cartItems[productId];
        }
        state.total -= 1;
      }
    },
    
    deleteItemFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      
      if (state.cartItems[productId]) {
        state.total -= state.cartItems[productId];
        delete state.cartItems[productId];
      }
    },
    
    clearCart: (state) => {
      state.cartItems = {};
      state.total = 0;
    },

    // Optional: Add quantity-based actions for better control
    addToCartWithQuantity: (
      state, 
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      
      if (state.cartItems[productId]) {
        state.cartItems[productId] += quantity;
      } else {
        state.cartItems[productId] = quantity;
      }
      state.total += quantity;
    },

    // Optional: Set specific quantity
    setItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const currentQuantity = state.cartItems[productId] || 0;
      
      if (quantity <= 0) {
        if (state.cartItems[productId]) {
          delete state.cartItems[productId];
        }
      } else {
        state.cartItems[productId] = quantity;
      }
      
      // Update total based on the difference
      state.total += quantity - currentQuantity;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  clearCart, 
  deleteItemFromCart,
  addToCartWithQuantity,
  setItemQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;

export type { CartState, CartItems };