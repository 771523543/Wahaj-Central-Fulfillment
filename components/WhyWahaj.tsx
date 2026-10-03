import {
  Sparkles,
  ShieldCheck,
  Gift,
  Heart,
} from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "اختيارات بعناية",
    description:
      "منتجات مختارة بذوق لتناسب مختلف الأذواق والمناسبات، مع اهتمام بالتفاصيل التي تصنع الفرق.",
  },
  {
    icon: ShieldCheck,
    title: "جودة نهتم بها",
    description:
      "نحرص على تقديم منتجات وتجربة تليق باسم وهج، من اختيار المنتج وحتى وصوله إليك.",
  },
  {
    icon: Gift,
    title: "تفاصيل تصنع الفرق",
    description:
      "نهتم بكل التفاصيل لتكون تجربتك مع وهج جميلة ومميزة، سواء اخترت لنفسك أو لمن تحب.",
  },
  {
    icon: Heart,
    title: "تجربة عميل مميزة",
    description:
      "نسعى لأن يكون اختيارك من وهج تجربة سهلة وراقية تبدأ من التصفح وتستمر حتى استلام طلبك.",
  },
]

export default function WhyWahaj() {
  return (
    <section
      id="why-wahaj"
      className="section"
      style={{ background: "var(--beige)" }}
    >
      <div className="container">

        {/* العنوان */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="gold font-bold text-sm">
            لماذا وهج؟
          </p>

          <h2
            className="serif text-4xl sm:text-5xl font-semibold mt-2"
            style={{ color: "var(--olive)" }}
          >
            لماذا تختار وهج؟
          </h2>

          <p className="muted leading-8 mt-4">
            لأننا نؤمن أن تجربة العطر لا تبدأ من المنتج فقط،
            بل من كل تفصيلة حوله.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className="card p-5 sm:p-7 text-center flex flex-col items-center"
              >

                {/* الأيقونة */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
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

                {/* العنوان */}
                <h3
                  className="font-bold text-base sm:text-xl mt-5"
                  style={{ color: "var(--olive)" }}
                >
                  {reason.title}
                </h3>

                {/* الوصف */}
                <p className="muted text-xs sm:text-sm leading-7 mt-3">
                  {reason.description}
                </p>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}