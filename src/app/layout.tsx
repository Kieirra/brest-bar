import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/organisms/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brest bar",
    description: "Incredibe bar at Brest (but don't tell them it's better at Antibes)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header className="absolute top-0 z-10 h-20 w-screen" />
                <main>{children}</main>
            </body>
        </html>
    );
}
