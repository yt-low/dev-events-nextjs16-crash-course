"use client";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleExploreClick = () => {
    posthog.capture("explore_events_clicked", {
      button_location: "homepage_hero",
    });
  };

  return (
    <button
      className="block mx-auto mt-4 w-full md:w-auto"
      type="button"
      onClick={handleExploreClick}
    >
      <a
        href="#events"
        className="block rounded-full text-sm font-semibold text-black bg-[#5dfeca] px-6 py-4 "
      >
        Explore
      </a>
    </button>
  );
};

export default ExploreBtn;
