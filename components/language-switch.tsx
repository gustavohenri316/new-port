"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Locale, i18n } from "@/configs/i18n.config";

export default function LanguageSwitch({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    const newPathName = redirectedPathName(selectedLocale);
    window.location.href = newPathName; 
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <select
      className="fixed bottom-7 right-16 mr-5 dark:text-white bg-transparent uppercase"
      value={lang} 
      onChange={handleLanguageChange} 
    >
      {i18n.locales.map((locale, index) => (
        <option key={index} className="uppercase dark:text-black" value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
