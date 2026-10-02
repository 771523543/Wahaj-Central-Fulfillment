"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { CartItem, Product } from "@/types/product"

type StoreContextValue = {
  cart: CartItem[]
  favorites: string[]
  cartCount: number
  cartTotal: number
  addToCart: (product: Product) => void
  updateQuantity: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}
const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem("wahaj-cart")
      const savedFavorites = window.localStorage.getItem("wahaj-favorites")
      if (savedCart) setCart(JSON.parse(savedCart))
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
    } catch { /* local storage can be unavailable in private browsing */ }
  }, [])
  useEffect(() => { window.localStorage.setItem("wahaj-cart", JSON.stringify(cart)) }, [cart])
  useEffect(() => { window.localStorage.setItem("wahaj-favorites", JSON.stringify(favorites)) }, [favorites])
  const value = useMemo(() => ({
    cart, favorites, cartCount: cart.reduce((total, item) => total + item.quantity, 0), cartTotal: cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
    addToCart: (product: Product) => setCart((current) => { const existing = current.find((item) => item.product.id === product.id); return existing ? current.map((item) => item.product.id === product.id ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) } : item) : [...current, { product, quantity: 1 }] }),
    updateQuantity: (id: string, quantity: number) => setCart((current) => quantity <= 0 ? current.filter((item) => item.product.id !== id) : current.map((item) => item.product.id === id ? { ...item, quantity: Math.min(quantity, item.product.stock) } : item)),
    removeFromCart: (id: string) => setCart((current) => current.filter((item) => item.product.id !== id)),
    toggleFavorite: (id: string) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
    isFavorite: (id: string) => favorites.includes(id),
  }), [cart, favorites])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export function useStore() { const context = useContext(StoreContext); if (!context) throw new Error("useStore must be used inside StoreProvider"); return context }
