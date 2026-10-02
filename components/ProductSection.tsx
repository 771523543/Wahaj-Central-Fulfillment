import {
  ArrowLeft,
  ShoppingBag
} from "lucide-react";

const products = [
  [
    "بخور وهج",
    "مزيج شرقي دافئ",
    "ابتداءً من 89 ر.س"
  ],
  [
    "مخمّرية وهج",
    "نعومة عطرية هادئة",
    "ابتداءً من 75 ر.س"
  ],
  [
    "عطر وهج",
    "حضور أنيق وثابت",
    "ابتداءً من 149 ر.س"
  ],
  [
    "بوكس وهج",
    "هدية مختارة بعناية",
    "ابتداءً من 199 ر.س"
  ]
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="section pt-0"
    >
      <div className="container">

        <div className="flex items-end justify-between gap-4 mb-8">

          <div>

            <p className="gold font-bold text-sm">
              اختيارات وهج
            </p>

            <h2
              className="serif text-4xl font-semibold mt-2"
              style={{ color: "var(--olive)" }}
            >
              منتجات مختارة
            </h2>

          </div>

          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-sm font-bold"
          >
            عرض الكل

            <ArrowLeft size={16} />
          </a>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {products.map(([name, desc, price]) => (

            <article
              className="card p-4"
              key={name}
            >

              <div
                className="aspect-square rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: "var(--beige)"
                }}
              >
                <span
                  className="serif text-3xl"
                  style={{
                    color: "var(--olive)"
                  }}
                >
                  وهج
                </span>
              </div>

              <p className="text-xs gold font-bold mb-1">
                وهج
              </p>

              <h3 className="font-bold">
                {name}
              </h3>

              <p className="muted text-xs mt-1">
                {desc}
              </p>

              <div className="flex items-center justify-between mt-4">

                <span className="text-sm font-bold">
                  {price}
                </span>

                <button
                  aria-label={`إضافة ${name}`}
                  className="rounded-full p-2"
                  style={{
                    background: "var(--olive)",
                    color: "white"
                  }}
                >
                  <ShoppingBag size={16} />
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}