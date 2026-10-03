"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
}

export default function InstallAppButton() {
  const [installEvent, setInstallEvent] =
    useState<BeforeInstallPromptEvent | null>(null)

  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    const checkInstalled = () => {
      const isStandalone =
        window.matchMedia(
          "(display-mode: standalone)"
        ).matches ||
        (window.navigator as Navigator & {
          standalone?: boolean
        }).standalone === true

      setInstalled(isStandalone)
    }

    checkInstalled()

    const handleBeforeInstallPrompt = (
      event: Event
    ) => {
      event.preventDefault()

      setInstallEvent(
        event as BeforeInstallPromptEvent
      )
    }

    const handleAppInstalled = () => {
      setInstalled(true)
      setInstallEvent(null)
    }

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    )

    window.addEventListener(
      "appinstalled",
      handleAppInstalled
    )

    const mediaQuery = window.matchMedia(
      "(display-mode: standalone)"
    )

    const handleDisplayModeChange = () => {
      checkInstalled()
    }

    mediaQuery.addEventListener(
      "change",
      handleDisplayModeChange
    )

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      )

      window.removeEventListener(
        "appinstalled",
        handleAppInstalled
      )

      mediaQuery.removeEventListener(
        "change",
        handleDisplayModeChange
      )
    }
  }, [])

  const handleInstall = async () => {
    if (!installEvent) return

    await installEvent.prompt()

    const choice = await installEvent.userChoice

    if (choice.outcome === "accepted") {
      setInstalled(true)
    }

    setInstallEvent(null)
  }

  if (installed || !installEvent) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleInstall}
      aria-label="تثبيت تطبيق وهج"
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
      style={{
        background: "var(--gold)",
        color: "var(--olive)",
      }}
    >
      <Download size={16} />
      <span>تثبيت التطبيق</span>
    </button>
  )
}