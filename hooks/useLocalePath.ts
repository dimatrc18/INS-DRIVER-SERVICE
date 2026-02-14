import { useTranslation } from 'react-i18next';

export const useLocalePath = () => {
  const { i18n } = useTranslation();

  const localePath = (path: string) => {
    // If it's an external link, return as is
    if (path.startsWith('http')) return path;

    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Default to 'en' if language is not set yet
    const currentLang = i18n.language || 'en';

    // Return the path with locale prefix
    // e.g. /en/booking
    return `/${currentLang}/${cleanPath}`;
  };

  return localePath;
};
