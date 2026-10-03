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
      className="sticky top-0 z-50 border-b border-white/10"
      style={{
        background: "var(--olive)",
      }}
    >
      <div className="container h-[72px] flex items-center justify-between gap-5">

        {/* شعار وهج */}
        <Link
          href="/"
          aria-label="وهج - الصفحة الرئيسية"
          className="flex items-center shrink-0 px-3 py-1 rounded-lg"
          style={{
            background: "var(--olive)",
          }}
        >
          <img
            src="/images/wahaj-logo.jpg"
            alt="شعار وهج"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-white">
          <Link
            href="/"
            className="transition-colors hover:text-[#B99A58]"
          >
            الرئيسية
          </Link>

          <Link
            href="/category/bakhoor"
            className="transition-colors hover:text-[#B99A58]"
          >
            الأقسام
          </Link>

          <Link
            href="/products"
            className="transition-colors hover:text-[#B99A58]"
          >
            المنتجات
          </Link>

          <Link
            href="/gifts"
            className="transition-colors hover:text-[#B99A58]"
          >
            المجموعات والهدايا
          </Link>
        </nav>

        {/* أدوات الهيدر */}
        <div className="flex items-center gap-1 text-white">

          {/* البحث */}
          <Link
            href="/search"
            aria-label="بحث"
            className="p-2 transition-colors hover:text-[#B99A58]"
          >
            <Search size={20} />
          </Link>

          {/* المفضلة */}
          <Link
            href="/favorites"
            aria-label="المفضلة"
            className="p-2 relative transition-colors hover:text-[#B99A58]"
          >
            <Heart
              size={20}
              fill={favorites.length > 0 ? "#B99A58" : "none"}
              color={favorites.length > 0 ? "#B99A58" : "currentColor"}
            />

            {favorites.length > 0 && (
              <span
                className="absolute top-0 right-0 min-w-[16px] h-[16px] rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "#B99A58",
                  color: "#1f2a20",
                }}
              >
                {favorites.length}
              </span>
            )}
          </Link>

          {/* السلة */}
          <Link
            href="/cart"
            aria-label="السلة"
            className="p-2 relative transition-colors hover:text-[#B99A58]"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span
                className="absolute top-0 right-0 min-w-[16px] h-[16px] rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "#B99A58",
                  color: "#1f2a20",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* قائمة الجوال */}
          <button
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden transition-colors hover:text-[#B99A58]"
            type="button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 py-5 grid gap-4 text-sm font-semibold text-white">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="transition-colors hover:text-[#B99A58]"
          >
            الرئيسية
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/category/bakhoor"
            className="transition-colors hover:text-[#B99A58]"
          >
            الأقسام
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/products"
            className="transition-colors hover:text-[#B99A58]"
          >
            المنتجات
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/gifts"
            className="transition-colors hover:text-[#B99A58]"
          >
            المجموعات والهدايا
          </Link>
        </nav>
      )}
    </header>
  )
}