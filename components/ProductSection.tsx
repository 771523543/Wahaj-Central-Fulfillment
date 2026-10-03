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
      className="section pt-0 overflow-hidden"
    >
      <div className="container min-w-0">

        {/* عنوان القسم */}
        <div className="flex min-w-0 items-end justify-between gap-3 mb-7 sm:mb-8">
          <div className="min-w-0">
            <p className="gold font-bold text-sm">
              اختيارات وهج
            </p>

            <h2
              className="serif text-3xl sm:text-4xl font-semibold mt-2 leading-tight"
              style={{
                color: "var(--olive)",
              }}
            >
              منتجات مختارة
            </h2>
          </div>

          {/* رابط عرض الكل للشاشات الأكبر */}
          <Link
            href="/products"
            className="
              hidden sm:flex
              shrink-0
              min-h-[44px]
              items-center
              justify-center
              gap-2
              rounded-full
              px-4
              text-sm
              font-bold
              whitespace-nowrap
              transition
            "
            style={{
              color: "var(--olive)",
              background: "var(--white)",
              border: "1px solid rgba(31, 42, 32, 0.10)",
            }}
          >
            عرض الكل
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* حاوية المنتجات الأب */}
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-4
          "
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-0 w-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* عرض جميع المنتجات للجوال */}
        <div className="flex sm:hidden justify-center mt-7">
          <Link
            href="/products"
            className="
              btn
              btn-light
              w-full
              max-w-xs
              border
              border-black/10
            "
          >
            عرض جميع المنتجات
            <ArrowLeft size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}