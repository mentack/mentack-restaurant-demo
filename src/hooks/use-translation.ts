"use client";

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const { language } = useLanguage();
  return {
    t: translations[language],
    lang: language,
  };
}
