import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google"

export const metadata: Metadata = {
    title: "Auth Page",
    description: "Login or Register",
};

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html  className={poppins.className} lang="en"  >
        <body >
        {children}
        </body>
        </html>
    );
}