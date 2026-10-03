"use client"

import { StoreProvider } from "@/components/StoreProvider"
import PWARegister from "@/components/PWARegister"
import AppSplash from "@/components/AppSplash"

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <PWARegister />
      <AppSplash />
      {children}
    </StoreProvider>
  )
}