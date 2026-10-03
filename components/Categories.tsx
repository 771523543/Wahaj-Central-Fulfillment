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
    image: "/images/bakhoor.webp",
    href: "/category/bakhoor",
  },
  {
    title: "المخمريات",
    description: "نعومة عطرية راقية بلمسة عربية أنيقة تدوم معك.",
    tag: "مخمريات",
    image: "/images/makhmariya.webp",
    href: "/category/makhmariya",
  },
  {
    title: "العطور",
    description: "توقيعك الخاص في كل حضور، بروائح مختارة بذوق وهج.",
    tag: "عطور فاخرة",
    image: "/images/perfumes.webp",
    href: "/category/perfumes",
  },
  {
    title: "المجموعات والهدايا",
    description: "اختيارات فاخرة وجاهزة لتقديمها في مناسباتك الخاصة.",
    tag: "هدايا مميزة",
    image: "/images/gifts.webp",
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
    }, 2500)

    return () => clearInterval(interval)
  }, [paused])

  const item = items[active]

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

        {/* السلايدر */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >

          {/* البطاقة */}
          <div
            key={item.title}
            className="overflow-hidden rounded-[30px] border"
            style={{
              background: "var(--white)",
              borderColor: "rgba(31,42,32,0.08)",
              boxShadow: "0 12px 40px rgba(31,42,32,0.08)",
            }}
          >

            {/* الصورة كاملة */}
            <div className="relative w-full bg-[var(--beige)]">
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                priority={active === 0}
                sizes="(max-width: 640px) 100vw, 1160px"
                className="block w-full h-auto object-contain"
              />
            </div>

            {/* النص خارج الصورة */}
            <div className="px-6 py-7 sm:px-10 sm:py-9 lg:px-14 lg:py-10">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                <div className="max-w-2xl">

                  <span
                    className="inline-flex items-center rounded-full px-4 py-2 text-xs font-bold"
                    style={{
                      background: "var(--gold)",
                      color: "var(--olive)",
                    }}
                  >
                    {item.tag}
                  </span>

                  <h3
                    className="serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4"
                    style={{ color: "var(--olive)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="muted text-sm sm:text-base leading-8 mt-3">
                    {item.description}
                  </p>

                </div>

                <div className="shrink-0">
                  <Link
                    href={item.href}
                    className="btn btn-gold"
                  >
                    اكتشف القسم
                    <ArrowLeft size={18} />
                  </Link>
                </div>

              </div>

            </div>

          </div>

          {/* أزرار التنقل */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 flex gap-2">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="القسم السابق"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--olive)]"
            >
              <ArrowRight size={19} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="القسم التالي"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--olive)]"
            >
              <ArrowLeft size={19} />
            </button>

          </div>

          {/* رقم الشريحة */}
          <div
            className="absolute top-5 right-5 rounded-full px-4 py-2 text-sm font-bold"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "var(--olive)",
            }}
          >
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </div>

        </div>

        {/* مؤشرات */}
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