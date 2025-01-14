import { IoMdArrowDropupCircle } from "react-icons/io";
import Button from "../Button/Button";
import img1 from "../assets/images/man1.png";
import HeaderSection from "../HeaderSection/HeaderSection";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <div className="w-4/5 mx-auto">
      <HeaderSection title={t("what_we_do")} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative ">
          <div className="w-[14rem] h-[14rem] mb-[3rem] rounded-full bg-blue-400 relative">
            <div className="absolute bottom-[2rem] gap-6 left-[6rem] bg-white flex items-center w-[20rem] py-6 px-8 rounded-xl justify-center shadow-lg">
              <img
                loading="lazy"
                src={img1}
                alt="..."
                className="rounded-full w-20 mb-2 h-20 border-[10px] border-[solid] bg-gray-400 border-[#b3cce0]"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <span>$ 7,164</span>{" "}
                  <IoMdArrowDropupCircle className="text-blue-800 bg-white" />
                </h3>
                <p className="uppercase flex items-center gap-1">
                  <span className="text-sm">{t("total_revenue")}</span>{" "}
                  <span className="text-green-600">+268</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[12rem] h-[12rem] rounded-full bg-green-300 relative right-[-15rem]">
            <div className="absolute bottom-[2rem] gap-6 right-[5rem] bg-white flex flex-row-reverse items-center w-[20rem] py-6 px-8 rounded-xl justify-center shadow-lg">
              <img
                src={img1}
                alt="..."
                className="rounded-full w-20 mb-2 h-20 border-[10px] border-[solid] bg-gray-400 border-[#b3cce0]"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <span>$ 7,164</span>{" "}
                  <IoMdArrowDropupCircle className="text-blue-800 bg-white" />
                </h3>
                <p className="uppercase flex items-center gap-1">
                  <span className="text-sm">{t("total_revenue")}</span>{" "}
                  <span className="text-green-600">+268</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <h1 className="text-[3rem] text-gray-800 text-center md:text-left font-[800] md:w-[50%]">
            {t("Increase_Customers_Sales")}
          </h1>
          <p className="text-[#ccc] text-center md:text-left my-8 md:w-[70%]">
            {t("guide")}
          </p>
          <Button title={t("more_details")} />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
