import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ChangeLanguage = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const supportedLanguages = ["tr", "en"];

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="flex gap-2">
      {supportedLanguages.map((lang, i) => (
        <button
          key={i}
          className={`${currentLanguage === lang ? "underline" : ""}`}
          onClick={() => setCurrentLanguage(lang)}
        >
          {t(lang)}
        </button>
      ))}
    </div>
  );
};

export default ChangeLanguage;
