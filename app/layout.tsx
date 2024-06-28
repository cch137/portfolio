import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import author from "@/config/author";

export const metadata: Metadata = {
  title: {
    default: "cch137's Portfolio",
    template: `%s - cch137`,
  },
  description: "Welcome to cch137's Portfolio.",
  icons: {
    // icon: "/favicon.ico",
    icon: author.profile,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current"
                href="/"
                as={NextLink}
              >
                <div className="text-default-400">{`© ${new Date().getFullYear()} cch137`}</div>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
