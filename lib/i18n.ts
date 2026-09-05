import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'zh', 'es'],
});

export const languages = {
  en: 'English',
  zh: '中文',
  es: 'Español',
} as const;