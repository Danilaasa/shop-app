import type { Metadata } from "next";
import "../globals.css";
import styles from "./layout.module.css"
import {Sidebar} from "@/components/sidebar/sidebar";
import { Poppins } from "next/font/google"
import {Header} from "@/components/Header/Header";
import classNames from "classnames";
import { StoreProvider } from "../StoreProvider";

export const metadata: Metadata = {
  title: "Home page",
  description: "Men's and women's clothing store",
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
      <body className={styles.container} >
      <main className={classNames(styles.layout, poppins.className)} >
          <Sidebar />
          <div className={styles.page} >
              <Header />
              <StoreProvider>
                {children}
              </StoreProvider>
                
              
                  
          </div>
      </main>
      </body>
    </html>
  );
}
