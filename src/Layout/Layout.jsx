import { useTranslation } from "react-i18next";
import personImg from "../assets/images/main.png";

// import BoxCard from "./BoxCard";
import SearchInput from "./SearchInput";

function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center gap-6 justify-around flex-wrap-reverse relative z-30">
        <div className="relative">
          <svg
            className="absolute top-[-9rem] md:top-[-28rem] left-[-32rem] md:left-[-30rem] z-[-10] h-[65rem] md:h-[90rem] w-[80rem] -rotate-[30deg] "
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#F1C21B"
              d="M34.4,-55C47.6,-45.1,63.5,-40.6,63.5,-31.6C63.5,-22.6,47.8,-9,44.8,5.9C41.8,20.8,51.6,37,50.5,50.6C49.4,64.1,37.3,75,25.7,70.7C14.1,66.5,3,47.1,-12.6,42.6C-28.2,38.2,-48.3,48.8,-60.3,46.1C-72.3,43.4,-76.1,27.4,-71.9,14.2C-67.8,1,-55.6,-9.4,-48.7,-21.3C-41.8,-33.2,-40.2,-46.5,-32.9,-59.2C-25.6,-71.8,-12.8,-83.7,-1.1,-82C10.6,-80.2,21.2,-64.9,34.4,-55Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src={personImg}
            loading="lazy"
            alt="Customer Image"
            className="z-30 h-[35rem] w-[25rem]"
          />
          {/* <BoxCard /> */}
        </div>
        <div className="w-[90%] pt-12 md:w-[33%]">
          <h1 className="text-[2.5rem] text-center md:text-left font-[800]">
            {t("layoutTitle")}
          </h1>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default Layout;
