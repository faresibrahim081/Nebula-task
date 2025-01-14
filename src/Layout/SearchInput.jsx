import { useTranslation } from "react-i18next";

function SearchInput() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder={t("search")}
        className="w-full rounded-md outline-none h-[4rem] py-2 px-3 shadow-md"
      />

      <span className="absolute inset-y-0 end-0 grid place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-11 p-2 me-2 rounded-lg bg-purple-800 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}

export default SearchInput;
