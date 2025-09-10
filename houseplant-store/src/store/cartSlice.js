import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    disabledProducts: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.disabledProducts.push(product.id);
      }
      
      cartSlice.caseReducers.updateTotals(state);
    },
    
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      state.disabledProducts = state.disabledProducts.filter(id => id !== productId);
      cartSlice.caseReducers.updateTotals(state);
    },
    
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.quantity += 1;
        cartSlice.caseReducers.updateTotals(state);
      }
    },
    
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        cartSlice.caseReducers.updateTotals(state);
      } else if (item && item.quantity === 1) {
        cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
    
    updateTotals: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
