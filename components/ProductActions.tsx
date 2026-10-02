"use client"
import { ShoppingBag, MessageCircle, Share2 } from "lucide-react"
import { useStore } from "@/components/StoreProvider"
import type { Product } from "@/types/product"
export default function ProductActions({product}:{product:Product}){const {addToCart}=useStore();const whatsapp="https://wa.me/967730991040?text="+encodeURIComponent(`السلام عليكم، أريد طلب:\nاسم المنتج: ${product.name}\nالكمية: 1\nالسعر: ${product.price} ر.س\nرابط المنتج: ${typeof window!=="undefined"?window.location.href:""}`);return <div className="flex flex-wrap gap-3 mt-7"><button onClick={()=>addToCart(product)} disabled={!product.available} className="btn btn-gold disabled:opacity-50"><ShoppingBag size={18}/>إضافة للسلة</button><a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-light"><MessageCircle size={18}/>اطلب عبر واتساب</a><button className="btn btn-light" onClick={()=>navigator.share?.({title:product.name,url:window.location.href})}><Share2 size={18}/>مشاركة</button></div>}
