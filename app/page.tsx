import Header from "@/components/Header"
import Hero from "@/components/Hero"
import OurStory from "@/components/OurStory"
import Categories from "@/components/Categories"
import ProductSection from "@/components/ProductSection"
import WhyWahaj from "@/components/WhyWahaj"
import GiftSection from "@/components/GiftSection"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* الواجهة الرئيسية */}
        <Hero />

        {/* قصتنا ورؤيتنا ورسالتنا */}
        <OurStory />

        {/* أقسام المتجر */}
        <Categories />

        {/* المنتجات */}
        <ProductSection />

        {/* لماذا تختار وهج؟ */}
        <WhyWahaj />

        {/* الهدايا والمناسبات */}
        <GiftSection />
      </main>

      {/* التذييل */}
      <Footer />

      {/* زر واتساب */}
      <WhatsAppButton />
    </>
  )
}