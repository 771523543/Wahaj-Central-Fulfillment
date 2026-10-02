import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
import { categoryLabels, type Product } from "@/types/product"
const map: Record<string, Product["category"]> = { bakhoor:"bakhoor", makhmariya:"makhmariya", perfumes:"perfumes", gifts:"gifts" }
export function generateStaticParams() { return Object.keys(map).map((slug) => ({ slug })) }
export default async function CategoryPage({ params }: { params: Promise<{slug:string}> }) { const {slug}=await params; const category=map[slug]; if(!category) notFound(); const items=products.filter(p=>p.category===category); return <><Header/><main className="section"><div className="container"><p className="gold font-bold">تسوق حسب القسم</p><h1 className="serif text-4xl font-bold mt-2" style={{color:"var(--olive)"}}>{categoryLabels[category]}</h1><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div></div></main><Footer/><WhatsAppButton/></> }
