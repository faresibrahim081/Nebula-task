import { useTranslation } from "react-i18next";
import { MdMessage, MdOutlineMail } from "react-icons/md";
const Form = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full min-w-[20rem] md:min-w-[29rem] p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">{t("Write_Us")}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              {t("Email")}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <MdOutlineMail />
              </span>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              {t("Message")}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-6 text-gray-500">
                <MdMessage />
              </span>
              <textarea
                id="message"
                placeholder={t("Enter_your_message")}
                className="w-full h-32 pl-10 pr-4 pt-4 resize-none border rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[rgb(150,19,158)] bg-[linear-gradient(90deg,_rgba(150,19,158,1)_65%,_rgba(4,0,255,0.76234243697479)_100%)] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {t("SEND_YOUR_MESSAGE")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
