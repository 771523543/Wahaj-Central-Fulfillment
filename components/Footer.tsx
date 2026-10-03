import Link from "next/link"
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react"

const shopLinks = [
  { label: "الأقسام", href: "/categories" },
  { label: "المنتجات", href: "/products" },
  { label: "المجموعات والهدايا", href: "/gifts" },
  { label: "المفضلة", href: "/favorites" },
]

const infoLinks = [
  { label: "طرق الدفع", href: "/#payment" },
  { label: "الشحن والتوصيل", href: "/shipping" },
  { label: "سياسة الاسترجاع", href: "/returns" },
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "تواصل معنا", href: "/contact" },
]

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/967730991040?text=" +
    encodeURIComponent(
      "السلام عليكم، أريد الاستفسار عن منتجات وهج."
    )

  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--ivory)",
      }}
    >
      <div className="container py-14 sm:py-16">

        {/* المحتوى الرئيسي */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* هوية وهج */}
          <div>
            <Link
              href="/"
              aria-label="وهج - الصفحة الرئيسية"
              className="inline-block"
            >
              <div
                className="serif text-4xl font-semibold"
                style={{
                  color: "var(--gold-light)",
                }}
              >
                وهج
              </div>
            </Link>

            <p className="text-sm leading-8 mt-4 opacity-70 max-w-sm">
              عطور، بخور، مخمريات ومجموعات هدايا
              بلمسة عربية معاصرة، صُممت لتترك أثرًا
              لا يُنسى.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold mt-6 transition hover:-translate-y-0.5"
              style={{
                background: "var(--gold)",
                color: "var(--olive)",
              }}
            >
              <MessageCircle size={17} />
              تواصل معنا
            </a>
          </div>

          {/* المتجر */}
          <div>
            <h3
              className="font-bold text-base mb-5"
              style={{
                color: "var(--gold-light)",
              }}
            >
              المتجر
            </h3>

            <nav className="grid gap-3 text-sm">
              {shopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="opacity-70 transition hover:opacity-100 hover:text-[var(--gold-light)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* معلومات مهمة */}
          <div>
            <h3
              className="font-bold text-base mb-5"
              style={{
                color: "var(--gold-light)",
              }}
            >
              معلومات مهمة
            </h3>

            <nav className="grid gap-3 text-sm">
              {infoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="opacity-70 transition hover:opacity-100 hover:text-[var(--gold-light)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* تواصل معنا */}
          <div>
            <h3
              className="font-bold text-base mb-5"
              style={{
                color: "var(--gold-light)",
              }}
            >
              تواصل معنا
            </h3>

            <div className="grid gap-4 text-sm">

              {/* واتساب */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 opacity-70 transition hover:opacity-100"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      "rgba(185,154,88,0.14)",
                    color: "var(--gold-light)",
                  }}
                >
                  <MessageCircle size={17} />
                </span>

                <span dir="ltr">
                  +967 730 991 040
                </span>
              </a>

              {/* الاتصال */}
              <a
                href="tel:+967730991040"
                className="flex items-center gap-3 opacity-70 transition hover:opacity-100"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      "rgba(185,154,88,0.14)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Phone size={17} />
                </span>

                <span>
                  اتصل بنا
                </span>
              </a>

              {/* الشحن */}
              <Link
                href="/shipping"
                className="flex items-center gap-3 opacity-70 transition hover:opacity-100"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      "rgba(185,154,88,0.14)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Truck size={17} />
                </span>

                <span>
                  الشحن والتوصيل
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* مزايا وهج */}
        <div
          className="grid sm:grid-cols-3 gap-5 mt-12 pt-8 border-t"
          style={{
            borderColor:
              "rgba(255,255,255,0.08)",
          }}
        >

          {/* الموثوقية */}
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={21}
              style={{
                color: "var(--gold-light)",
              }}
            />

            <div>
              <p className="text-sm font-bold">
                تجربة موثوقة
              </p>

              <p className="text-xs opacity-50 mt-1">
                نهتم بتجربتك من البداية للنهاية
              </p>
            </div>
          </div>

          {/* التوصيل */}
          <div className="flex items-center gap-3">
            <Truck
              size={21}
              style={{
                color: "var(--gold-light)",
              }}
            />

            <div>
              <p className="text-sm font-bold">
                شحن وتوصيل
              </p>

              <p className="text-xs opacity-50 mt-1">
                نعمل على إيصال طلبك بأفضل طريقة
              </p>
            </div>
          </div>

          {/* خدمة العملاء */}
          <div className="flex items-center gap-3">
            <MessageCircle
              size={21}
              style={{
                color: "var(--gold-light)",
              }}
            />

            <div>
              <p className="text-sm font-bold">
                خدمة العملاء
              </p>

              <p className="text-xs opacity-50 mt-1">
                تواصل معنا عبر واتساب
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* أسفل الموقع */}
      <div
        className="border-t py-5"
        style={{
          borderColor:
            "rgba(255,255,255,0.08)",
        }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-50">

          <p>
            © {new Date().getFullYear()} وهج — جميع الحقوق محفوظة
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-1 transition hover:opacity-100"
          >
            العودة للرئيسية
            <ArrowLeft size={13} />
          </Link>

        </div>
      </div>
    </footer>
  )
}