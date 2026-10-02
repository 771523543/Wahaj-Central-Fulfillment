import type { Metadata, Viewport } from "next"
import "./globals.css"
import AppProviders from "@/components/AppProviders"
export const metadata: Metadata={metadataBase:new URL("https://wahaj-ashen.vercel.app"),title:{default:"وهج | بخور ومخمريات وعطور",template:"%s | وهج"},description:"وهج — بخور ومخمريات وعطور ومجموعات هدايا بلمسة عربية معاصرة.",keywords:["وهج","بخور","عطور","مخمريات","هدايا"],alternates:{canonical:"/"},openGraph:{title:"وهج | عطور وبخور",description:"اكتشف اختيارات وهج العطرية",url:"/",siteName:"وهج",locale:"ar_SA",type:"website"},twitter:{card:"summary_large_image",title:"وهج | عطور وبخور",description:"اكتشف اختيارات وهج العطرية"},robots:{index:true,follow:true},manifest:"/manifest.webmanifest",appleWebApp:{capable:true,title:"وهج",statusBarStyle:"black-translucent"}}
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#1f2a20"}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body><AppProviders>{children}</AppProviders></body></html>}
