"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  Heart,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"
import { useStore } from "@/components/StoreProvider"
import InstallAppButton from "@/components/InstallAppButton"

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
      <div className="container min-h-[72px] flex items-center justify-between gap-3">

        {/* الشعار */}
        <Link
          href="/"
          aria-label="وهج - الصفحة الرئيسية"
          className="flex items-center shrink-0"
        >
          <Image
            src="/images/wahaj-logo.webp"
            alt="شعار وهج"
            width={180}
            height={60}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-white">

          <Link
            href="/"
            className="transition-colors hover:text-[var(--gold-light)]"
          >
            الرئيسية
          </Link>

          <Link
            href="/categories"
            className="transition-colors hover:text-[var(--gold-light)]"
          >
            الأقسام
          </Link>

          <Link
            href="/products"
            className="transition-colors hover:text-[var(--gold-light)]"
          >
            المنتجات
          </Link>

          <Link
            href="/gifts"
            className="transition-colors hover:text-[var(--gold-light)]"
          >
            المجموعات والهدايا
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--gold-light)]"
          >
            <MessageCircle size={16} />
            تواصل معنا
          </Link>

        </nav>

        {/* أدوات الهيدر */}
        <div className="flex items-center gap-1 text-white">

          {/* زر تثبيت التطبيق */}
          <div className="hidden sm:block">
            <InstallAppButton />
          </div>

          {/* البحث */}
          <Link
            href="/search"
            aria-label="البحث"
            className="p-2 transition-colors hover:text-[var(--gold-light)]"
          >
            <Search size={20} />
          </Link>

          {/* المفضلة */}
          <Link
            href="/favorites"
            aria-label="المفضلة"
            className="relative p-2 transition-colors hover:text-[var(--gold-light)]"
          >
            <Heart
              size={20}
              fill={
                favorites.length > 0
                  ? "var(--gold)"
                  : "none"
              }
              color={
                favorites.length > 0
                  ? "var(--gold)"
                  : "currentColor"
              }
            />

            {favorites.length > 0 && (
              <span
                className="absolute top-0 right-0 min-w-[16px] h-[16px] rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "var(--gold)",
                  color: "var(--olive)",
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
            className="relative p-2 transition-colors hover:text-[var(--gold-light)]"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span
                className="absolute top-0 right-0 min-w-[16px] h-[16px] rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "var(--gold)",
                  color: "var(--olive)",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* زر القائمة للجوال */}
          <button
            type="button"
            aria-label={
              open
                ? "إغلاق القائمة"
                : "فتح القائمة"
            }
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden transition-colors hover:text-[var(--gold-light)]"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* قائمة الجوال */}
      {open && (
        <nav
          className="md:hidden border-t border-white/10 px-5 py-5"
          style={{
            background: "var(--olive)",
          }}
        >
          <div className="grid gap-1 text-sm font-semibold text-white">

            {/* تثبيت التطبيق للجوال */}
            <div className="mb-2">
              <InstallAppButton />
            </div>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--gold-light)]"
            >
              الرئيسية
            </Link>

            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--gold-light)]"
            >
              الأقسام
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--gold-light)]"
            >
              المنتجات
            </Link>

            <Link
              href="/gifts"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--gold-light)]"
            >
              المجموعات والهدايا
            </Link>

            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--gold-light)]"
            >
              المفضلة
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-3 font-bold"
              style={{
                background: "var(--gold)",
                color: "var(--olive)",
              }}
            >
              <MessageCircle size={18} />
              تواصل معنا
            </Link>

          </div>
        </nav>
      )}
    </header>
  )
}