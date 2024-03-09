import Header from "@/components/header";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { getDictionary } from "@/dictionaries/get-dictionary-server";
import { Locale } from "@/configs/i18n.config";
import LanguageSwitch from "@/components/language-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo | Personal Portfolio",
  description: "Gustavo is a full-stack developer with 3 years of experience.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    lang: Locale
  }
}) {
  const dict = await getDictionary(params.lang)
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#0a1d13] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#e0dddd]"></div>
        <div className="bg-[#3c4b43] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#091a09]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header dict={dict}/>
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
            <LanguageSwitch lang={params.lang}/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
