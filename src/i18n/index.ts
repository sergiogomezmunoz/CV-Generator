// i18n index

// Description ----------------------------------------------------------------
// This file exports the i18n instance with the translations and the
// configuration. It also exports the useTranslation hook.
// ----------------------------------------------------------------------------

// Imports --------------------------------------------------------------------
import english from "@/i18n/en.json"; // Import the english translations
import spanish from "@/i18n/es.json"; // Import the spanish translations
import english_cv from "@cv/cv-en.json"; // Import the english CV
import spanish_cv from "@cv/cv-es.json"; // Import the spanish CV
// ----------------------------------------------------------------------------

// Constants ------------------------------------------------------------------
const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
}; // Define the languages
// ----------------------------------------------------------------------------

// Exports --------------------------------------------------------------------
export const getI18n = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale == LANGUAGES.SPANISH) {
    // If the current locale is spanish
    return {
      ...english,
      ...spanish,
    }; // Return the translations
  }
  return english; // Return the english translations
};

export const loadCV = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale == LANGUAGES.SPANISH) {
    // If the current locale is spanish
    return spanish_cv; // Return the spanish CV
  }
  return english_cv; // Return the english CV
};
// ----------------------------------------------------------------------------
