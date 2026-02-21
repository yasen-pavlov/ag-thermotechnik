import de from './de.json';

const translations: Record<string, Record<string, unknown>> = { de };

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K;
    }[keyof T & string]
  : never;

type TranslationKeys = NestedKeyOf<typeof de>;

export function t(key: TranslationKeys, locale: string = 'de'): string {
  const keys = key.split('.');
  let result: unknown = translations[locale] || translations['de'];

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof result === 'string' ? result : key;
}

export const defaultLocale = 'de';
export const supportedLocales = ['de'] as const;
