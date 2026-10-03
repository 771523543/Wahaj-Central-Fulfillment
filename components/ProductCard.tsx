"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { Product } from "@/types/product"
import { categoryLabels } from "@/types/product"
import { useStore } from "@/components/StoreProvider"

export default function ProductCard({
  product,
}: {
  product: Product
}) {
  const { toggleFavorite, isFavorite } = useStore()

  const cardRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const favorite = isFavorite(product.id)

  const whatsappUrl =
    "https://wa.me/967730991040?text=" +
    encodeURIComponent(
      `السلام عليكم، أريد طلب ${product.name}.`
    )

  return (
    <article
      ref={cardRef}
      className={`card product-card p-3 sm:p-4 flex flex-col min-w-0 ${
        isVisible
          ? "product-card-visible"
          : ""
      }`}
    >
      {/* صورة المنتج */}
      <div className="relative min-w-0">
        <Link
          href={`/products/${product.slug}`}
          aria-label={`عرض ${product.name}`}
          className="block"
        >
          <div
            className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              background: "var(--beige)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={1200}
              className="h-full w-full object-contain p-2.5 sm:p-4 transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
            />
          </div>
        </Link>

        {/* المفضلة */}
        <button
          type="button"
          onClick={() =>
            toggleFavorite(product.id)
          }
          aria-label={
            favorite
              ? `إزالة ${product.name} من المفضلة`
              : `إضافة ${product.name} للمفضلة`
          }
          className="absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full bg-white/90 p-2 shadow-sm transition hover:scale-105"
        >
          <Heart
            size={16}
            className="sm:hidden"
            fill={
              favorite
                ? "var(--gold)"
                : "none"
            }
            color={
              favorite
                ? "var(--gold)"
                : "var(--olive)"
            }
          />

          <Heart
            size={17}
            className="hidden sm:block"
            fill={
              favorite
                ? "var(--gold)"
                : "none"
            }
            color={
              favorite
                ? "var(--gold)"
                : "var(--olive)"
            }
          />
        </button>
      </div>

      {/* معلومات المنتج */}
      <p className="text-[10px] sm:text-xs gold font-bold mt-3 sm:mt-4">
        {categoryLabels[product.category]}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="block min-w-0"
      >
        <h3
          className="font-bold text-sm sm:text-base leading-6 mt-1"
          style={{
            color: "var(--olive)",
          }}
        >
          {product.name}
        </h3>
      </Link>

      <p className="muted text-[11px] sm:text-xs leading-5 sm:leading-6 mt-1.5 sm:mt-2">
        {product.shortDescription}
      </p>

      {/* زر الطلب */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 sm:mt-4 flex w-full min-h-[42px] items-center justify-center gap-1.5 rounded-full px-2 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition hover:-translate-y-0.5"
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