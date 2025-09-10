export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateTotalItems = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export const validateCartItem = (item) => {
  return item && typeof item.id === 'number' && item.quantity > 0;
};

export const isProductInCart = (productId, cartItems) => {
  return cartItems.some(item => item.id === productId);
};

export const getCartItemById = (productId, cartItems) => {
  return cartItems.find(item => item.id === productId);
};
