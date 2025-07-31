import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   weight: ["400", "700"],
// });

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "700"],
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
      <body className={`${jost.variable} antialiased font-elegant`}>
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
