import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
export default function ProductSection(){return <section id="products" className="section pt-0"><div className="container"><div className="flex items-end justify-between gap-4 mb-8"><div><p className="gold font-bold text-sm">اختيارات وهج</p><h2 className="serif text-4xl font-semibold mt-2" style={{color:"var(--olive)"}}>منتجات مختارة</h2></div><Link href="/products" className="hidden sm:flex items-center gap-2 text-sm font-bold">عرض الكل<ArrowLeft size={16}/></Link></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{products.filter(p=>p.featured).map(p=><ProductCard key={p.id} product={p}/>)}</div></div></section>}
