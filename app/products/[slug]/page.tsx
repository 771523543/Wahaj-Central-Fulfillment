import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductActions from "@/components/ProductActions"
import ProductCard from "@/components/ProductCard"
import { products, getProduct } from "@/data/products"
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=getProduct(slug);if(!product)notFound();const similar=products.filter(p=>p.category===product.category&&p.id!==product.id);return <><Header/><main className="section"><div className="container"><div className="grid lg:grid-cols-2 gap-10 items-start"><div className="rounded-3xl overflow-hidden" style={{background:"var(--beige)"}}><Image src={product.image} alt={product.name} width={800} height={800} className="w-full" priority/></div><div><p className="gold font-bold">وهج للعطور والبخور</p><h1 className="serif text-4xl font-bold mt-2" style={{color:"var(--olive)"}}>{product.name}</h1><p className="text-2xl font-bold mt-5">{product.price} ر.س</p><p className="muted leading-8 mt-5">{product.description}</p><p className="text-sm mt-5">{product.available ? `متوفر — ${product.stock} قطع` : "غير متوفر حالياً"}</p><ProductActions product={product}/></div></div>{similar.length>0&&<section className="mt-20"><h2 className="serif text-3xl font-bold" style={{color:"var(--olive)"}}>قد يعجبك أيضاً</h2><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">{similar.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}</div></main><Footer/><WhatsAppButton/></>}
