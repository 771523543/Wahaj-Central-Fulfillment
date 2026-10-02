const items = [
  [
    "البخور",
    "روائح دافئة وفاخرة",
    "بخور فاخر"
  ],
  [
    "المخمريات",
    "نعومة وثبات يلامس الذاكرة",
    "مخمريات"
  ],
  [
    "العطور",
    "توقيعك الخاص في كل حضور",
    "عطور"
  ],
  [
    "المجموعات والهدايا",
    "اختيارات جاهزة للمناسبات",
    "هدايا"
  ]
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="section"
    >
      <div className="container">

        <div className="text-center mb-10">

          <p className="gold font-bold text-sm">
            اكتشف وهج
          </p>

          <h2
            className="serif text-4xl font-semibold mt-2"
            style={{ color: "var(--olive)" }}
          >
            أقسامنا
          </h2>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {items.map(([title, desc, tag], index) => (

            <a
              key={title}
              href="#products"
              className="card group p-5 min-h-52 flex flex-col justify-end"
              style={{
                background:
                  index % 2
                    ? "var(--beige)"
                    : "var(--white)"
              }}
            >

              <span className="text-xs gold font-bold mb-auto">
                {tag}
              </span>

              <h3 className="serif text-2xl font-semibold mt-10">
                {title}
              </h3>

              <p className="muted text-sm mt-2 leading-6">
                {desc}
              </p>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}