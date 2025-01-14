import { useTranslation } from "react-i18next";
import img from "../assets/images/person-1.png";

function BoxCard() {
  const { t } = useTranslation();
  return (
    <div className=" absolute bottom-[-65px] bg-white flex flex-col items-center h-[10rem] w-[10rem] rounded-xl justify-center shadow-lg">
      <img
        src={img}
        loading="lazy"
        alt="Person image for his card"
        className="rounded-full w-20 mb-2 h-20 border-[10px] border-[solid] bg-yellow-400 border-[#ecc4c4]"
      />
      <h3 className="text-xl">{t("James")}</h3>
      <p className="text-[#ccc] text-sm">{t("Marketer")}</p>
    </div>
  );
}

export default BoxCard;
