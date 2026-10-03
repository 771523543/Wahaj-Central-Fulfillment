import Link from "next/link"
import { ArrowLeft, Flame, Sparkles, Gift, Wind } from "lucide-react"

const items = [
  {
    title: "البخور",
    description: "روائح دافئة وفاخرة تضفي على المكان حضورًا لا يُنسى.",
    tag: "بخور فاخر",
    href: "/category/bakhoor",
    icon: Flame,
  },
  {
    title: "المخمريات",
    description: "نعومة وثبات بلمسة عطرية أنيقة ترافقك طوال اليوم.",
    tag: "مخمريات",
    href: "/category/makhmariya",
    icon: Sparkles,
  },
  {
    title: "العطور",
    description: "توقيعك الخاص في كل حضور، بروائح مختارة بذوق وهج.",
    tag: "عطور",
    href: "/category/perfumes",
    icon: Wind,
  },
  {
    title: "المجموعات والهدايا",
    description: "اختيارات جميلة وجاهزة لتقديمها في مناسباتك الخاصة.",
    tag: "هدايا",
    href: "/category/gifts",
    icon: Gift,
  },
]

export default function Categories() {
  return (
    <section
      id="categories"
      className="section"
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
            اختر ما يناسب ذوقك من مجموعة وهج العطرية،
            حيث يجتمع العطر والبخور والهدايا في تجربة واحدة.
          </p>
        </div>

        {/* بطاقات الأقسام */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <Link
                key={item.title}
                href={item.href}
                className="card group relative min-h-[270px] p-6 flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  background:
                    index % 2 === 0
                      ? "var(--white)"
                      : "var(--beige)",
                }}
              >
                {/* الأيقونة */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* التصنيف */}
                <span className="text-xs gold font-bold mt-7">
                  {item.tag}
                </span>

                {/* العنوان */}
                <h3
                  className="serif text-2xl font-semibold mt-2"
                  style={{ color: "var(--olive)" }}
                >
                  {item.title}
                </h3>

                {/* الوصف */}
                <p className="muted text-sm leading-7 mt-3">
                  {item.description}
                </p>

                {/* الرابط */}
                <div
                  className="mt-auto pt-5 flex items-center gap-2 text-sm font-bold"
                  style={{ color: "var(--olive)" }}
                >
                  اكتشف القسم
                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}