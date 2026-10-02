import {
  ArrowLeft,
  Sparkles
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="pattern"
      style={{
        backgroundColor: "var(--olive)",
        color: "var(--ivory)"
      }}
    >
      <div className="container min-h-[570px] py-20 flex items-center">

        <div className="max-w-2xl">

          <div className="flex items-center gap-2 gold text-sm font-bold mb-5">
            <Sparkles size={18} />

            روائح تُحكى قبل أن تُنسى
          </div>

          <h1 className="serif text-5xl sm:text-6xl leading-[1.2] font-semibold mb-6">

            وهج...

            <br />

            <span className="gold">
              عطرٌ يترك أثرًا.
            </span>

          </h1>

          <p className="text-base sm:text-lg leading-8 opacity-85 max-w-xl mb-9">
            بخور، مخمريات، عطور ومجموعات هدايا صُممت بذوق عربي
            معاصر؛ تفاصيل هادئة وحضور لا يُنسى.
          </p>

          <div className="flex flex-wrap gap-3">

            <a
              className="btn btn-gold"
              href="#products"
            >
              تسوق الآن

              <ArrowLeft size={18} />
            </a>

            <a
              className="btn border border-white/20 text-white"
              href="#gifts"
            >
              اكتشف الهدايا
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}