"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, CrystalProduct } from "@/types/crystal-ecommerce";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CrystalProduct, quantity?: number, selectedBeadSize?: string, customIntentNote?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  shippingFee: number;
  giftPackagingFee: number;
  hasGiftPackaging: boolean;
  setHasGiftPackaging: (val: boolean) => void;
  giftMessage: string;
  setGiftMessage: (val: string) => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  getWhatsAppOrderUrl: (customerName?: string, shippingAddress?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 999;
export const STANDARD_SHIPPING_FEE = 99;
export const GIFT_PACKAGING_FEE = 99;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hasGiftPackaging, setHasGiftPackaging] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jaimini_crystal_cart");
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("jaimini_crystal_cart", JSON.stringify(cartItems));
      } catch (e) {
        console.warn("Failed to save cart to localStorage", e);
      }
    }
  }, [cartItems, isHydrated]);

  const addToCart = (
    product: CrystalProduct, 
    quantity: number = 1, 
    selectedBeadSize?: string, 
    customIntentNote?: string
  ) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        if (selectedBeadSize) updated[existingIdx].selectedBeadSize = selectedBeadSize;
        if (customIntentNote) updated[existingIdx].customIntentNote = customIntentNote;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedBeadSize, customIntentNote }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingFee = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : STANDARD_SHIPPING_FEE;
  const giftFee = hasGiftPackaging && cartSubtotal > 0 ? GIFT_PACKAGING_FEE : 0;
  const cartTotal = cartSubtotal + shippingFee + giftFee;

  const getWhatsAppOrderUrl = (customerName: string = "", shippingAddress: string = "") => {
    const phoneNumber = "919316356317";
    
    let message = `*✨ New Order - Jaimini Crystal Products Store ✨*\n\n`;
    if (customerName) message += `*Customer:* ${customerName}\n`;
    if (shippingAddress) message += `*Delivery Address:* ${shippingAddress}\n\n`;
    
    message += `*Items Ordered:*\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.name} (x${item.quantity}) - ₹${item.product.price * item.quantity}\n`;
      if (item.selectedBeadSize) message += `   _Size: ${item.selectedBeadSize}_\n`;
      if (item.customIntentNote) message += `   _Intent: ${item.customIntentNote}_\n`;
    });

    if (hasGiftPackaging) {
      message += `\n🎁 *Sacred Gift Packaging:* YES (+₹${GIFT_PACKAGING_FEE})`;
      if (giftMessage) message += `\n   _Gift Message:_ "${giftMessage}"`;
    }
    
    message += `\n\n*Subtotal:* ₹${cartSubtotal}`;
    message += `\n*Shipping:* ${shippingFee === 0 ? "FREE" : `₹${shippingFee}`}`;
    if (hasGiftPackaging) message += `\n*Gift Packaging:* ₹${GIFT_PACKAGING_FEE}`;
    message += `\n*Grand Total:* ₹${cartTotal}\n\n`;
    message += `_Please confirm my order and share the UPI / payment details. Thank you Dr. Niyati!_`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        shippingFee,
        giftPackagingFee: GIFT_PACKAGING_FEE,
        hasGiftPackaging,
        setHasGiftPackaging,
        giftMessage,
        setGiftMessage,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        getWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
