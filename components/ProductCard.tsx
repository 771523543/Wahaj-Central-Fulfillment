"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import type { Product } from "@/types/product"
import { categoryLabels } from "@/types/product"
import { useStore } from "@/components/StoreProvider"

export default function ProductCard({
  product,
}: {
  product: Product
}) {
  const { toggleFavorite, isFavorite } = useStore()

  const whatsappUrl =
    "https://wa.me/967730991040?text=" +
    encodeURIComponent(
      `السلام عليكم، أريد طلب ${product.name}.`
    )

  return (
    <article className="card p-4 flex flex-col">

      {/* صورة المنتج */}
      <div className="relative">

        <Link
          href={`/products/${product.slug}`}
          aria-label={`عرض ${product.name}`}
        >
          <div
            className="aspect-square rounded-2xl overflow-hidden"
            style={{ background: "var(--beige)" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={1200}
              className="h-full w-full object-contain p-3 sm:p-4"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
            />
          </div>
        </Link>

        {/* المفضلة */}
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-label={
            isFavorite(product.id)
              ? `إزالة ${product.name} من المفضلة`
              : `إضافة ${product.name} للمفضلة`
          }
          className="absolute top-3 left-3 rounded-full bg-white/90 p-2 shadow-sm transition hover:scale-105"
        >
          <Heart
            size={17}
            fill={
              isFavorite(product.id)
                ? "var(--gold)"
                : "none"
            }
            color={
              isFavorite(product.id)
                ? "var(--gold)"
                : "var(--olive)"
            }
          />
        </button>

      </div>

      {/* معلومات المنتج */}
      <p className="text-xs gold font-bold mt-4">
        {categoryLabels[product.category]}
      </p>

      <Link href={`/products/${product.slug}`}>
        <h3
          className="font-bold mt-1"
          style={{ color: "var(--olive)" }}
        >
          {product.name}
        </h3>
      </Link>

      <p className="muted text-xs leading-6 mt-2">
        {product.shortDescription}
      </p>

      {/* زر الطلب */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5"
        style={{
          background: "var(--gold)",
          color: "var(--olive)",
        }}
      >
        اطلبها الآن
      </a>

    </article>
  )
}