import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
export default function ProductsPage() { return <><Header /><main className="section"><div className="container"><p className="gold font-bold">كتالوج وهج</p><h1 className="serif text-4xl font-bold mt-2" style={{color:"var(--olive)"}}>كل المنتجات</h1><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></div></main><Footer/><WhatsAppButton/></> }
