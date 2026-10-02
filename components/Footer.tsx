export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--ivory)"
      }}
    >
      <div className="container py-12 grid md:grid-cols-3 gap-10">

        <div>

          <div className="serif text-3xl gold">
            وهج
          </div>

          <p className="opacity-65 text-sm leading-7 mt-3 max-w-sm">
            بخور ومخمريات وعطور ومجموعات هدايا
            بلمسة عربية معاصرة.
          </p>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            روابط
          </h3>

          <div className="grid gap-3 text-sm opacity-75">

            <a href="#categories">
              الأقسام
            </a>

            <a href="#products">
              المنتجات
            </a>

            <a href="#gifts">
              الهدايا
            </a>

          </div>

        </div>

        <div>

          <h3 className="font-bold mb-4">
            تواصل معنا
          </h3>

          <div className="text-sm opacity-75 grid gap-3">

            <span>
              Instagram · TikTok
            </span>

            <span>
              خدمة العملاء قريبًا
            </span>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs opacity-50">
        © {new Date().getFullYear()} وهج — جميع الحقوق محفوظة
      </div>

    </footer>
  );
}