import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
export default function GiftsPage(){return <><Header/><main className="section"><div className="container"><p className="gold font-bold">لمن تحب</p><h1 className="serif text-4xl font-bold mt-2" style={{color:"var(--olive)"}}>المجموعات والهدايا</h1><p className="muted mt-3">اختيارات أنيقة تصلح للمناسبات واللحظات الجميلة.</p><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{products.filter(p=>p.category==="gifts").map(p=><ProductCard key={p.id} product={p}/>)}</div></div></main><Footer/><WhatsAppButton/></>}
