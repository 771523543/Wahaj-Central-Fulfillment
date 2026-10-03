import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function ProductSection() {
  const featuredProducts = products.filter(
    (product) => product.featured
  )

  return (
    <section
      id="products"
      className="section pt-0"
    >
      <div className="container">

        {/* عنوان القسم */}
        <div className="flex items-end justify-between gap-4 mb-7 sm:mb-8">
          <div className="min-w-0">
            <p className="gold font-bold text-sm">
              اختيارات وهج
            </p>

            <h2
              className="serif text-3xl sm:text-4xl font-semibold mt-2"
              style={{
                color: "var(--olive)",
              }}
            >
              منتجات مختارة
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden sm:flex shrink-0 items-center gap-2 text-sm font-bold"
          >
            عرض الكل
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* المنتجات */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* عرض الكل للجوال */}
        <div className="flex sm:hidden justify-center mt-7">
          <Link
            href="/products"
            className="btn btn-light border border-black/10"
          >
            عرض جميع المنتجات
            <ArrowLeft size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}