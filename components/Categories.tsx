"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const items = [
  {
    title: "البخور",
    description: "روائح دافئة وفاخرة تضفي على المكان حضورًا لا يُنسى.",
    tag: "بخور فاخر",
    image: "/images/categories/bakhoor.webp",
    href: "/category/bakhoor",
  },
  {
    title: "المخمريات",
    description: "نعومة عطرية راقية بلمسة عربية أنيقة تدوم معك.",
    tag: "مخمريات",
    image: "/images/categories/makhmariya.webp",
    href: "/category/makhmariya",
  },
  {
    title: "العطور",
    description: "توقيعك الخاص في كل حضور، بروائح مختارة بذوق وهج.",
    tag: "عطور فاخرة",
    image: "/images/categories/perfumes.webp",
    href: "/category/perfumes",
  },
  {
    title: "المجموعات والهدايا",
    description: "اختيارات فاخرة وجاهزة لتقديمها في مناسباتك الخاصة.",
    tag: "هدايا مميزة",
    image: "/images/categories/gifts.webp",
    href: "/category/gifts",
  },
]

export default function Categories() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const nextSlide = () => {
    setActive((current) => (current + 1) % items.length)
  }

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? items.length - 1 : current - 1
    )
  }

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [paused])

  return (
    <section
      id="categories"
      className="section overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <div className="container">

        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="gold font-bold text-sm">
            اكتشف وهج
          </p>

          <h2
            className="serif text-4xl sm:text-5xl font-semibold mt-2"
            style={{ color: "var(--olive)" }}
          >
            أقسامنا
          </h2>

          <p className="muted leading-8 mt-4">
            اختر ما يناسب ذوقك من عالم وهج،
            حيث يجتمع العطر والبخور والهدايا في تجربة واحدة.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >

          {/* الصورة */}
          <div className="relative overflow-hidden rounded-[30px]">

            <div
              key={items[active].title}
              className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full animate-[categoryFade_0.6s_ease]"
            >

              <Image
                src={items[active].image}
                alt={items[active].title}
                fill
                priority={active === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1160px) 100vw, 1160px"
                className="object-cover"
              />

              {/* تدرج فوق الصورة */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(31,42,32,0.92) 0%, rgba(31,42,32,0.55) 42%, rgba(31,42,32,0.08) 100%)",
                }}
              />

              {/* المحتوى */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-7 sm:px-12 lg:px-16">
                  <div className="max-w-xl text-white">

                    <span
                      className="inline-flex items-center rounded-full px-4 py-2 text-xs font-bold mb-5"
                      style={{
                        background: "rgba(185,154,88,0.95)",
                        color: "var(--olive)",
                      }}
                    >
                      {items[active].tag}
                    </span>

                    <h3 className="serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                      {items[active].title}
                    </h3>

                    <p className="mt-5 text-sm sm:text-base leading-8 text-white/85 max-w-lg">
                      {items[active].description}
                    </p>

                    <Link
                      href={items[active].href}
                      className="btn btn-gold mt-7"
                    >
                      اكتشف القسم
                      <ArrowLeft size={18} />
                    </Link>

                  </div>
                </div>
              </div>

            </div>

            {/* رقم الشريحة */}
            <div className="absolute bottom-6 left-6 sm:left-10 flex items-center gap-2 text-white">
              <span className="text-lg font-bold">
                {String(active + 1).padStart(2, "0")}
              </span>

              <span className="w-8 h-px bg-white/40" />

              <span className="text-sm text-white/60">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* أزرار التنقل */}
          <div className="absolute bottom-6 right-6 sm:right-10 flex gap-2">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="القسم السابق"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--olive)]"
            >
              <ArrowRight size={19} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="القسم التالي"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--olive)]"
            >
              <ArrowLeft size={19} />
            </button>

          </div>

        </div>

        {/* مؤشرات الأقسام */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`الانتقال إلى قسم ${item.title}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: active === index ? "42px" : "12px",
                background:
                  active === index
                    ? "var(--gold)"
                    : "rgba(31,42,32,0.2)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}