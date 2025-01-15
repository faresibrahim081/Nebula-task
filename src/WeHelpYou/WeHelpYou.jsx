import { IoMdCart } from "react-icons/io";
import Button from "../Button/Button";
import chairImg from "../assets/images/chair.png";
import headPhoneImg from "../assets/images/headphone.png";
import HeaderSection from "../HeaderSection/HeaderSection";
import { useTranslation } from "react-i18next";

function WeHelpYou() {
  const { t } = useTranslation();
  return (
    <div className="mb-[20rem]">
      <HeaderSection title={t("we_help_you")} />
      <div className="flex items-center justify-around flex-wrap">
        <div className="md: mt-[7rem]">
          <h1 className="text-[3rem] text-gray-800 text-center md:text-left font-[800] md:w-[50%]">
            {t("Sell_Product")}
          </h1>
          <p className="text-[#ccc] my-8text-center md:text-left  md:w-[70%] pl-6 md:pl-0">
            {t("guide")}
          </p>
          <Button title={t("more_details")} />
        </div>
        <div className="relative flex flex-wrap md:gap-8 justify-center">
          <div className="w-[18rem] relative top-0 left-0 h-[18rem] rounded-full bg-yellow-200 ">
            {/*   */}
            <div className="w-[12rem] absolute top-[9rem] right-[1rem] shadow-md pb-4 rounded-md bg-white px-8">
              <img
                src={chairImg}
                loading="lazy"
                alt="chair Image"
                className="w-full h-[10rem] absolute top-[-5rem] right-[5px]"
              />
              <h3 className="pt-[6rem] text-gray-600 text-sm font-[700] text-center">
                {t("Minimal_Chair")}
              </h3>
              <hr className="my-4 bg-gray-500 " />
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 text-sm">$ 200</span>
                <span className="text-">
                  <IoMdCart />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[15rem] relative top-[10rem] h-[15rem] rounded-full bg-purple-300 ">
            {/*   */}
            <div className="w-[12rem] absolute top-[7rem] left-[-1rem] shadow-md pb-4 rounded-md bg-white px-8">
              <img
                loading="lazy"
                src={headPhoneImg}
                alt="chair Image"
                className="w-full h-[10rem] absolute top-[-5rem] right-[5px]"
              />
              <h3 className="pt-[6rem] text-gray-600 text-sm font-[700] text-center">
                {t("Smart_HeadPhone")}
              </h3>
              <hr className="my-4 bg-gray-500 " />
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 text-sm">$ 200</span>
                <span className="text-">
                  <IoMdCart />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeHelpYou;
