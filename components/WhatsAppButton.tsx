"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const href =
    "https://wa.me/967730991040?text=" +
    encodeURIComponent("السلام عليكم، أريد الاستفسار عن منتجات وهج.")

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  )
}