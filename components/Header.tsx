"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  Heart
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5"
      style={{
        background: "rgba(247,242,232,.94)",
        backdropFilter: "blur(12px)"
      }}
    >
      <div className="container h-[72px] flex items-center justify-between gap-5">

        <a
          href="#"
          className="serif text-3xl font-semibold"
          style={{ color: "var(--olive)" }}
        >
          وهج
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <a href="#">الرئيسية</a>

          <a href="#categories">
            الأقسام
          </a>

          <a href="#products">
            المنتجات
          </a>

          <a href="#gifts">
            المجموعات والهدايا
          </a>
        </nav>

        <div className="flex items-center gap-1">

          <button
            aria-label="بحث"
            className="p-2"
          >
            <Search size={20} />
          </button>

          <button
            aria-label="المفضلة"
            className="p-2 hidden sm:block"
          >
            <Heart size={20} />
          </button>

          <button
            aria-label="السلة"
            className="p-2"
          >
            <ShoppingBag size={20} />
          </button>

          <button
            aria-label="القائمة"
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/5 px-6 py-5 grid gap-4 text-sm font-semibold">

          <a
            onClick={() => setOpen(false)}
            href="#"
          >
            الرئيسية
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#categories"
          >
            الأقسام
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#products"
          >
            المنتجات
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#gifts"
          >
            المجموعات والهدايا
          </a>

        </nav>
      )}
    </header>
  );
}