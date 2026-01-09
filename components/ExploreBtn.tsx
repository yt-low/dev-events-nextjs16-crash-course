"use client";
const ExploreBtn = () => {
  return (
    <button
      className="block mx-auto mt-4 w-full md:w-auto"
      type="button"
      onClick={() => console.log("click")}
    >
      <a
        href="#events"
        className="block rounded-full text-sm font-semibold text-white bg-cyan-500 px-6 py-4 "
      >
        Explore
      </a>
    </button>
  );
};

export default ExploreBtn;
