import Header from "@/components/Header"
import Hero from "@/components/Hero"
import OurStory from "@/components/OurStory"
import Categories from "@/components/Categories"
import ProductSection from "@/components/ProductSection"
import GiftSection from "@/components/GiftSection"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <OurStory />
        <Categories />
        <ProductSection />
        <GiftSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}