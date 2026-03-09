"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import en, { type Dictionary } from "./en";
import es from "./es";

type Language = "en" | "es";

interface LanguageContextValue {
  lang: Language;
  t: Dictionary;
  toggleLanguage: () => void;
}

const dictionaries: Record<Language, Dictionary> = { en, es };

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "es") setLang("es");
  }, []);

  // Persist choice and update <html lang>
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
