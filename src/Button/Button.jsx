/* eslint-disable react/prop-types */
import { SlArrowRight } from "react-icons/sl";

function Button({ title }) {
  return (
    <div>
      <button
        className={`bg-[rgb(150,19,158)] bg-[linear-gradient(90deg,_rgba(150,19,158,1)_65%,_rgba(4,0,255,0.76234243697479)_100%)] mx-auto md:mx-0
         my-8 py-2.5 px-8 uppercase rounded-3xl relative flex items-center justify-between`}
      >
        <span className="text-white text-sm mr-4">{title}</span>
        <span
          className={`hidden
           rounded-full bg-white p-2 absolute right-1 `}
        >
          <SlArrowRight />
        </span>
      </button>
    </div>
  );
}

export default Button;
