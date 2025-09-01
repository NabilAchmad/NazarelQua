import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient"; // Komponen untuk JS Bootstrap

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazarel Qua",
  description: "Website Nazarel Qua - Depot Air Minum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className={`${geistSans.variable} antialiased bg-light`}>
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-1">
          <div className="container">
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <img src="Nazarel-Qua.png" alt="Nazarel Qua" width={75} height={75} className="me-2"/>
              <span className="fw-bolder fs-5 text-primary">Nazarel Qua</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-lg-center">
                <li className="nav-item">
                  <Link href="/" className="nav-link fw-medium">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/portofolio" className="nav-link fw-medium">Portofolio</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link fw-medium">Contact</Link>
                </li>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <Link href="/login" className="btn btn-outline-primary rounded-pill px-4">
                    Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/register" className="btn btn-primary rounded-pill px-4 ms-lg-3 mt-2 mt-lg-0">
                    Sign Up
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>
        
        <footer className="py-4 mt-5 bg-white text-center text-muted border-top">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} Nazarel Qua. All rights reserved.</p>
            </div>
        </footer>

        <BootstrapClient />
      </body>
    </html>
  );
}