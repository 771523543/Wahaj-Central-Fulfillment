const CACHE_NAME = "wahaj-pwa-v4"

const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL)
    })
  )

  // تفعيل النسخة الجديدة مباشرة
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // حذف الكاش الخاص بالإصدارات القديمة
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      ),

      // جعل الـ Service Worker الجديد مسيطراً مباشرة
      self.clients.claim(),
    ])
  )
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  const request = event.request

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy)
          })
        }

        return response
      })
      .catch(() => {
        return caches.match(request).then((cached) => {
          return cached || caches.match("/")
        })
      })
  )
})