"use client"

import { Eye, Heart, Sparkles } from "lucide-react"

const items = [
  {
    icon: Heart,
    label: "قصتنا",
    title: "من شغفٍ بالعطر بدأت الحكاية",
    text: "بدأت وهج من شغف بالتفاصيل الجميلة والروائح التي تحمل معها إحساسًا وذكرى. نصنع تجربة عطرية تجمع بين الأصالة العربية والذوق المعاصر.",
    animation: "story-card-1",
  },
  {
    icon: Eye,
    label: "رؤيتنا",
    title: "أن نترك أثرًا لا يُنسى",
    text: "نسعى لأن تكون وهج وجهة موثوقة لكل من يبحث عن البخور والمخمريات والعطور والهدايا التي تعبّر عن الذوق وتمنح كل مناسبة حضورًا خاصًا.",
    animation: "story-card-2",
  },
  {
    icon: Sparkles,
    label: "رسالتنا",
    title: "تفاصيل تصنع الفرق",
    text: "نقدم منتجات عطرية مختارة بعناية، مع اهتمام بالجودة والتفاصيل وتجربة العميل، لنحوّل كل اختيار من وهج إلى لحظة جميلة تستحق أن تُحكى.",
    animation: "story-card-3",
  },
]

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="section overflow-hidden"
      style={{ background: "var(--beige)" }}
    >
      <div className="container">

        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="gold font-bold text-sm">
            حكاية وهج
          </p>

          <h2
            className="serif text-4xl sm:text-5xl font-semibold mt-2"
            style={{ color: "var(--olive)" }}
          >
            قصتنا، رؤيتنا، رسالتنا
          </h2>

          <p className="muted leading-8 mt-4">
            في وهج نؤمن أن العطر ليس مجرد رائحة، بل إحساس وذكرى وحضور
            يبقى أثره حتى بعد أن ينتهي اللقاء.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.label}
                className={`card story-card ${item.animation} p-7 text-center`}
              >
                <div
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <p className="gold font-bold text-sm mt-6">
                  {item.label}
                </p>

                <h3
                  className="serif text-2xl font-semibold mt-2"
                  style={{
                    color: "var(--olive)",
                  }}
                >
                  {item.title}
                </h3>

                <p className="muted text-sm leading-7 mt-4">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}