"use client"

import { useEffect } from "react"

export default function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    const registerServiceWorker = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "وهج PWA Service Worker:",
            registration.scope
          )
        })
        .catch((error) => {
          console.error(
            "خطأ في تسجيل PWA Service Worker:",
            error
          )
        })
    }

    if (document.readyState === "complete") {
      registerServiceWorker()
    } else {
      window.addEventListener(
        "load",
        registerServiceWorker,
        { once: true }
      )
    }

    return () => {
      window.removeEventListener(
        "load",
        registerServiceWorker
      )
    }
  }, [])

  return null
}