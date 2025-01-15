import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function SwitchBtn() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-100 text-gray-700 py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-green-300 focus:outline-none transition duration-300 ease-in-out"
    >
      {i18n.language === "en" ? t("Arabic") : t("English")}
    </button>
  );
}

export default SwitchBtn;
