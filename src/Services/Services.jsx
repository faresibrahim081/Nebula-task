import img1 from "../assets/images/pexels-olly-733872.jpg";
import img2 from "../assets/images/pexels-pixabay-276528.jpg";
import img3 from "../assets/images/pexels-goumbik-653429.jpg";
import HeaderSection from "../HeaderSection/HeaderSection";
import { useTranslation } from "react-i18next";
function Services() {
  const { t } = useTranslation();
  const cards = [
    {
      img: img1,
      title: t("Fashion_Store"),
      desc: t("cardDesc"),
    },
    {
      img: img2,
      title: t("home_furniture"),
      desc: t("cardDesc"),
    },
    {
      img: img3,
      title: t("super_gadget_store"),
      desc: t("cardDesc"),
    },
  ];
  return (
    <div className="">
      <HeaderSection title={t("our_services")} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[65%] md:w-[80%] mx-auto">
        {cards.map((card, i) => {
          return (
            <div key={i} className="p-4 bg-white shadow-sm rounded-xl">
              <img
                loading="lazy"
                src={card.img}
                alt="..."
                className="w-full rounded-xl h-[10rem] md:h-[14rem]"
              />
              <div className="p-3">
                <h2 className="text-xl my-2 md:my-5 font-[700] uppercase text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-500 capitalize">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
