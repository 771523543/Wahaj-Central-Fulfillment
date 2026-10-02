"use client"

import Link from "next/link"
import { Menu, Search, ShoppingBag, X, Heart } from "lucide-react"
import { useState } from "react"
import { useStore } from "@/components/StoreProvider"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { cartCount, favorites } = useStore()

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5"
      style={{
        background: "rgba(247,242,232,.94)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container h-[72px] flex items-center justify-between gap-5">

        {/* شعار وهج */}
        <Link
          href="/"
          aria-label="وهج - الصفحة الرئيسية"
          className="flex items-center shrink-0"
        >
          <img
            src="/images/wahaj-logo.jpg"
            alt="شعار وهج"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <Link href="/">الرئيسية</Link>
          <Link href="/category/bakhoor">الأقسام</Link>
          <Link href="/products">المنتجات</Link>
          <Link href="/gifts">المجموعات والهدايا</Link>
        </nav>

        {/* أدوات الهيدر */}
        <div className="flex items-center gap-1">

          {/* البحث */}
          <Link
            href="/search"
            aria-label="بحث"
            className="p-2"
          >
            <Search size={20} />
          </Link>

          {/* المفضلة */}
          <Link
            href="/favorites"
            aria-label="المفضلة"
            className="p-2 relative"
          >
            <Heart size={20} />

            {favorites.length > 0 && (
              <span className="badge">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* السلة */}
          <Link
            href="/cart"
            aria-label="السلة"
            className="p-2 relative"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="badge">
                {cartCount}
              </span>
            )}
          </Link>

          {/* قائمة الجوال */}
          <button
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden"
            type="button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      {open && (
        <nav className="md:hidden border-t border-black/5 px-6 py-5 grid gap-4 text-sm font-semibold">
          <Link
            onClick={() => setOpen(false)}
            href="/"
          >
            الرئيسية
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/category/bakhoor"
          >
            الأقسام
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/products"
          >
            المنتجات
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/gifts"
          >
            المجموعات والهدايا
          </Link>
        </nav>
      )}
    </header>
  )
}