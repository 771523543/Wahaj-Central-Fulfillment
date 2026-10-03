import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import {
  ArrowLeft,
  Clock3,
  MessageCircle,
  Phone,
  ShoppingBag,
} from "lucide-react"

export const metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع وهج للاستفسار عن المنتجات والطلبات والدفع والشحن.",
}

const whatsappNumber = "967730991040"

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=` +
  encodeURIComponent(
    "السلام عليكم، أريد الاستفسار عن منتجات وهج."
  )

const orderWhatsappUrl =
  `https://wa.me/${whatsappNumber}?text=` +
  encodeURIComponent(
    "السلام عليكم، أريد المساعدة في إتمام طلبي من وهج."
  )

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          className="pattern"
          style={{
            background: "var(--olive)",
            color: "var(--ivory)",
          }}
        >
          <div className="container py-16 sm:py-20 text-center">
            <p className="gold font-bold text-sm">
              نحن هنا لخدمتك
            </p>

            <h1 className="serif text-4xl sm:text-5xl lg:text-6xl font-semibold mt-3">
              تواصل معنا
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base leading-8 opacity-85 mt-5">
              لديك استفسار عن منتج، طلب، دفع أو توصيل؟
              تواصل معنا وسنساعدك بكل سرور.
            </p>
          </div>
        </section>

        {/* وسائل التواصل */}
        <section
          className="section"
          style={{ background: "var(--ivory)" }}
        >
          <div className="container">

            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="gold font-bold text-sm">
                اختر الطريقة المناسبة
              </p>

              <h2
                className="serif text-3xl sm:text-4xl font-bold mt-2"
                style={{ color: "var(--olive)" }}
              >
                كيف يمكننا مساعدتك؟
              </h2>

              <p className="muted leading-8 mt-4">
                فريق وهج جاهز للإجابة عن استفساراتك ومساعدتك
                في اختيار المنتجات وإتمام الطلب.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">

              {/* واتساب */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-7 text-center group transition hover:-translate-y-1"
              >
                <div
                  className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <MessageCircle size={28} />
                </div>

                <h3
                  className="font-bold text-xl mt-5"
                  style={{ color: "var(--olive)" }}
                >
                  واتساب
                </h3>

                <p className="muted text-sm leading-7 mt-3">
                  للاستفسارات والطلبات وإرسال إثبات التحويل.
                </p>

                <span
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  ابدأ المحادثة
                  <ArrowLeft size={16} />
                </span>
              </a>

              {/* اتصال */}
              <a
                href="tel:+967730991040"
                className="card p-7 text-center group transition hover:-translate-y-1"
              >
                <div
                  className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Phone size={28} />
                </div>

                <h3
                  className="font-bold text-xl mt-5"
                  style={{ color: "var(--olive)" }}
                >
                  اتصل بنا
                </h3>

                <p className="muted text-sm leading-7 mt-3">
                  يمكنك الاتصال بنا مباشرة للاستفسار والمساعدة.
                </p>

                <span
                  dir="ltr"
                  className="inline-block mt-5 text-sm font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  +967 730 991 040
                </span>
              </a>

              {/* الطلب */}
              <Link
                href="/products"
                className="card p-7 text-center group transition hover:-translate-y-1"
              >
                <div
                  className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <ShoppingBag size={28} />
                </div>

                <h3
                  className="font-bold text-xl mt-5"
                  style={{ color: "var(--olive)" }}
                >
                  ابدأ طلبك
                </h3>

                <p className="muted text-sm leading-7 mt-3">
                  تصفح منتجات وهج واختر ما يناسبك.
                </p>

                <span
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  تصفح المنتجات
                  <ArrowLeft size={16} />
                </span>
              </Link>

            </div>

            {/* رقم التواصل */}
            <div
              className="max-w-3xl mx-auto mt-8 rounded-[28px] border p-6 sm:p-8 text-center"
              style={{
                background: "var(--white)",
                borderColor: "rgba(31,42,32,0.08)",
                boxShadow: "0 12px 40px rgba(31,42,32,0.06)",
              }}
            >
              <p className="gold font-bold text-sm">
                رقم التواصل
              </p>

              <p
                dir="ltr"
                className="text-2xl sm:text-3xl font-bold mt-3"
                style={{ color: "var(--olive)" }}
              >
                +967 730 991 040
              </p>

              <p className="muted text-sm mt-3">
                واتساب واتصال مباشر
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MessageCircle size={18} />
                  تواصل عبر واتساب
                </a>

                <a
                  href="tel:+967730991040"
                  className="btn btn-light"
                >
                  <Phone size={18} />
                  اتصل الآن
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* متى تتواصل معنا */}
        <section
          className="section pt-0"
          style={{ background: "var(--ivory)" }}
        >
          <div className="container max-w-4xl">

            <div
              className="rounded-[28px] p-7 sm:p-9"
              style={{
                background: "var(--beige)",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">

                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "var(--olive)",
                    color: "var(--gold-light)",
                  }}
                >
                  <Clock3 size={25} />
                </div>

                <div>
                  <h2
                    className="serif text-2xl font-bold"
                    style={{ color: "var(--olive)" }}
                  >
                    يمكنك التواصل معنا بخصوص
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-5 text-sm">
                    <p>• الاستفسار عن المنتجات</p>
                    <p>• توفر المنتجات</p>
                    <p>• المساعدة في اختيار المنتج</p>
                    <p>• إتمام الطلب</p>
                    <p>• طرق الدفع والتحويل</p>
                    <p>• إرسال إثبات الدفع</p>
                    <p>• الشحن والتوصيل</p>
                    <p>• متابعة الطلب</p>
                  </div>
                </div>

              </div>
            </div>

            {/* طلب مساعدة */}
            <div className="text-center mt-12">
              <h2
                className="serif text-3xl font-bold"
                style={{ color: "var(--olive)" }}
              >
                تحتاج مساعدة الآن؟
              </h2>

              <p className="muted text-sm leading-7 mt-3">
                نحن جاهزون لمساعدتك في اختيار ما يناسبك.
              </p>

              <a
                href={orderWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-6"
              >
                <MessageCircle size={18} />
                تحدث معنا الآن
                <ArrowLeft size={18} />
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}