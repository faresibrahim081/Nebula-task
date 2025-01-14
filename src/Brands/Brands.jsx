import logo from "../assets/images/Logo.svg";
import logo1 from "../assets/images/Logo (1).svg";
import logo2 from "../assets/images/Logo (2).svg";
import logo3 from "../assets/images/Logo (3).svg";
import logo4 from "../assets/images/Logo (4).svg";
import { useTranslation } from "react-i18next";

function Brands() {
  const imgs = [logo, logo1, logo2, logo3, logo4];
  const { t } = useTranslation();
  return (
    <div className="flex justify-around bg-white items-center flex-wrap shadow-md mt-[15rem]">
      <h3 className="text-gray-400 text-xl">{t("Brands")}</h3>

      <div className="flex gap-6 items-center justify-around flex-wrap">
        {imgs.map((log, i) => {
          return (
            <img
              key={i}
              loading="lazy"
              src={log}
              alt="Brands logo"
              className="h-20"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
