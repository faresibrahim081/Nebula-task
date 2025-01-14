import { useTranslation } from "react-i18next";

function SwitchBtn() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const nextLanguage = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLanguage);
  };
  // comment
  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-100 text-gray-700 py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-green-300 focus:outline-none transition duration-300 ease-in-out"
    >
      {currentLanguage === "en" ? t("Arabic") : t("English")}
    </button>
  );
}

export default SwitchBtn;
