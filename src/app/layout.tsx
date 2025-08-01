import type { Metadata } from "next";
import { Jost, Bitcount_Grid_Double } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "700"],
});

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  variable: "--font-bitcount",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Drew",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={` ${jost.variable} ${bitcount.variable} antialiased font-soft`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="Dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
