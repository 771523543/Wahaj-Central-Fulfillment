import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Categories from "@/components/Categories"
import ProductSection from "@/components/ProductSection"
import GiftSection from "@/components/GiftSection"
import OurStory from "@/components/OurStory"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <ProductSection />
        <GiftSection />
        <OurStory />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}