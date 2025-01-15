import { useTranslation } from "react-i18next";
import SwitchBtn from "../SwitchBtn/SwitchBtn";

function Nav() {
  const { t } = useTranslation();
  return (
    <div className="flex text-gray-700  items-center text-lg justify-end py-8 px-12 gap-4">
      <SwitchBtn />
      <button className="px-5 py-2 rounded-3xl bg-green-100">
        {t("login")}
      </button>
    </div>
  );
}

export default Nav;
