import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "wahaj-bakhoor", name: "بخور وهج", slug: "wahaj-bakhoor", category: "bakhoor",
    description: "مزيج شرقي دافئ من أجود الأخشاب والراتنجات، صُمم ليمنح المكان حضوراً فاخراً وذاكرة عطرية لا تُنسى.", shortDescription: "مزيج شرقي دافئ", price: 89, oldPrice: 110,
    image: "/images/products/wahaj-bakhoor.svg", images: ["/images/products/wahaj-bakhoor.svg"], available: true, featured: true, stock: 24, createdAt: "2026-01-10",
  },
  {
    id: "wahaj-makhmariya", name: "مخمّرية وهج", slug: "wahaj-makhmariya", category: "makhmariya",
    description: "مخمّرية ناعمة للشعر والجسم بنفحات دافئة، تمنحك عطراً قريباً يرافقك طوال اليوم.", shortDescription: "نعومة عطرية هادئة", price: 75,
    image: "/images/products/makhmariya-aroos.jpg", images: ["/images/products/makhmariya-aroos.jpg", "/images/products/makhmariya-qalaa-arous.jpg", "/images/products/makhmariya-bakhoor.jpg", "/images/products/makhmariya-durar.jpg", "/images/products/makhmariya-saboya.jpg", "/images/products/makhmariya-collection.jpg"], available: true, featured: true, stock: 18, createdAt: "2026-01-12",
  },
  {
    id: "wahaj-perfume", name: "عطر وهج", slug: "wahaj-perfume", category: "perfumes",
    description: "عطر عربي معاصر يجمع بين العمق والأناقة بثبات متوازن وحضور راقٍ للمناسبات اليومية والخاصة.", shortDescription: "حضور أنيق وثابت", price: 149,
    image: "/images/products/wahaj-perfume.svg", images: ["/images/products/wahaj-perfume.svg"], available: true, featured: true, stock: 12, createdAt: "2026-01-15",
  },
  {
    id: "wahaj-gift-box", name: "بوكس وهج", slug: "wahaj-gift-box", category: "gifts",
    description: "مجموعة هدية مختارة بعناية تجمع نفحات وهج المميزة في تغليف أنيق يصلح لكل مناسبة.", shortDescription: "هدية مختارة بعناية", price: 199,
    image: "/images/products/wahaj-gift-box.svg", images: ["/images/products/wahaj-gift-box.svg"], available: true, featured: true, stock: 8, createdAt: "2026-01-20",
  },
]

export function getProduct(slug: string) { return products.find((product) => product.slug === slug) }
export function getProductsByCategory(category: Product["category"]) { return products.filter((product) => product.category === category) }
