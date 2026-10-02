"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
export default function SearchPage(){const [query,setQuery]=useState("");const results=products.filter(p=>`${p.name} ${p.description} ${p.shortDescription}`.includes(query.trim()));return <><Header/><main className="section"><div className="container"><h1 className="serif text-4xl font-bold" style={{color:"var(--olive)"}}>ابحث في وهج</h1><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="اكتب اسم المنتج أو الوصف..." aria-label="البحث" className="mt-6 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none focus:border-[var(--gold)]"/><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{results.map(p=><ProductCard key={p.id} product={p}/>)}</div>{query&&results.length===0&&<p className="card p-8 text-center mt-6">لا توجد نتائج مطابقة لبحثك.</p>}</div></main><Footer/><WhatsAppButton/></>}
