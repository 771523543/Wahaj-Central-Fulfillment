"use client"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
import { useStore } from "@/components/StoreProvider"
export default function FavoritesPage(){const {favorites}=useStore();const items=products.filter(p=>favorites.includes(p.id));return <><Header/><main className="section"><div className="container"><h1 className="serif text-4xl font-bold" style={{color:"var(--olive)"}}>المفضلة</h1>{!items.length?<div className="card text-center p-10 mt-8"><p>لم تضف منتجات للمفضلة بعد.</p><Link href="/products" className="btn btn-gold mt-5">تصفح المنتجات</Link></div>:<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}</div></main><Footer/><WhatsAppButton/></>}
