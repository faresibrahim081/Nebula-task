/* eslint-disable react/prop-types */
function HeaderSection({ title }) {
  return (
    <div>
      <h1 className="mt-[8rem] mb-[5rem] animate-fade-in text-5xl bg-white px-8 py-4 rounded-2xl w-fit uppercase font-bold text-mainColor mx-auto ">
        {title}
      </h1>
    </div>
  );
}

export default HeaderSection;
