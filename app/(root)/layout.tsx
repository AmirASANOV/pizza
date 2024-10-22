import type { Metadata } from "next";

import "../globals.css";
import { Header } from "@/shared/components/shared";
import { ThemeProvider } from "@/shared/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "Pizza",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-white">
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}

        <Header />
        {modal}
        {children}
      {/* </ThemeProvider> */}
    </main>
  );
}
