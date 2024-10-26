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
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <main className="min-h-screen">
        <Header />
        {modal}
        {children}
      </main>
    </ThemeProvider>
  );
}
