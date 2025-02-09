import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CloudStore - Your Modern Cloud Storage Solution",
  description: "Securely store, share, and access your files from anywhere",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

