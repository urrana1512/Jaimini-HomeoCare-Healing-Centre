import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import CartDrawer from "@/components/ecommerce/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaimini Homeocare & Healing Centre | Dr. Niyati Rana",
  description: "Premium holistic wellness by Dr. Niyati Rana. Experience complete mind-body-spirit transformation through Homeopathy, Reiki Healing, Lama Fera, Tarot, and Crystal Products.",
  icons: {
    icon: "/images/jaimini_logo.png",
    apple: "/images/jaimini_logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-white text-deep-charcoal relative">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </WishlistProvider>
        </CartProvider>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919316356317?text=Hi%20Dr.%20Niyati,%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-premium-medium hover:shadow-premium-soft transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute right-16 bg-deep-charcoal text-cream-white text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-premium-soft">
            Chat on WhatsApp
          </span>
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846l.385.228c1.547.917 3.361 1.403 5.216 1.404 5.577 0 10.118-4.529 10.121-10.106.002-2.701-1.047-5.24-2.956-7.152C17.499 1.618 14.97 1.56 12.28 1.56c-5.58 0-10.12 4.53-10.124 10.108-.001 1.896.501 3.743 1.454 5.376l.25.426-1.01 3.693 3.797-.992zM15.7 12.82c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.12-.5.1-.15.22-.58.73-.7 0.88-.13.15-.27.17-.49.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.39-.05-.11-.5-1.2-.69-1.65-.18-.45-.37-.39-.5-.39h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.13.9 2.27c.11.15 1.56 2.38 3.78 3.34.53.23.94.37 1.26.47.53.17 1.02.15 1.4.09.43-.06 1.3-.53 1.48-1.04.19-.51.19-.95.13-1.04-.06-.09-.2-.14-.42-.25z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
