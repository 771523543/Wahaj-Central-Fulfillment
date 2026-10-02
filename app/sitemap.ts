import type { MetadataRoute } from "next"
import { products } from "@/data/products"
export default function sitemap(): MetadataRoute.Sitemap { const base="https://wahaj-ashen.vercel.app"; return [{url:base,lastModified:new Date()},{url:`${base}/products`,lastModified:new Date()},{url:`${base}/gifts`,lastModified:new Date()},...products.map(p=>({url:`${base}/products/${p.slug}`,lastModified:new Date(p.createdAt)}))] }
