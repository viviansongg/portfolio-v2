// import type React from "react"
// import type { Metadata } from "next"
// import { CssBaseline, GeistProvider } from "@geist-ui/react"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import "./globals.css"
// import { GeistMono, GeistSans } from "../lib/fonts"

// export const metadata: Metadata = {
//   title: "Sarah Chen - Portfolio",
//   description: "Computer Science Student Portfolio - Retro Windows Style",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <GeistProvider>
//           <CssBaseline />
//           <Suspense fallback={null}>{children}</Suspense>
//           <Analytics />
//         </GeistProvider>
//       </body>
//     </html>
//   )
// }
