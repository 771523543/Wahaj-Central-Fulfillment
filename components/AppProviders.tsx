"use client"
import { StoreProvider } from "@/components/StoreProvider"
import PWARegister from "@/components/PWARegister"
export default function AppProviders({ children }: { children: React.ReactNode }) { return <StoreProvider><PWARegister />{children}</StoreProvider> }
