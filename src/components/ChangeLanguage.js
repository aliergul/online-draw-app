import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ChangeLanguage = () => {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;

  const supportedLanguages = ["tr", "en"];

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="flex gap-2">
      {supportedLanguages.map((lang, i) => (
        <button
          key={i}
          className={`${currentLanguage === lang ? "underline" : ""}`}
          onClick={() => changeLanguage(lang)}
        >
          {t(lang)}
        </button>
      ))}
    </div>
  );
};

export default ChangeLanguage;
