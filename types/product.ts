export type Product = {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  oldPrice?: number
  category: "bakhoor" | "makhmariya" | "perfumes" | "gifts"
  image: string
  images: string[]
  available: boolean
  featured: boolean
  stock: number
  createdAt: string
}

export const categoryLabels: Record<Product["category"], string> = {
  bakhoor: "البخور",
  makhmariya: "المخمريات",
  perfumes: "العطور",
  gifts: "المجموعات والهدايا",
}

export type CartItem = { product: Product; quantity: number }
