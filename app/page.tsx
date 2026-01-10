import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constant";

const Page = () => {
  return (
    <section>
      <div className="px-5 md:px-0">
        <h1 className="text-center text-4xl text-shadow-2xs font-bold mb-4 bg-gradient-to-b from-white to-[#aaa] bg-clip-text text-transparent">
          The Hub for every developer
          <br />
          Event you can't miss
        </h1>
        <p className="text-center">Hackathons, Meetups, and Conference.</p>
        <ExploreBtn />
      </div>

      <div className="mt-20 space-y-7 overflow-x-hidden md:px-10">
        <h3 className="text-xl font-bold pl-10 md:pl-0">Featured Events</h3>
        <ul className="events flex overflow-x-auto md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {events.map((event, index) => (
            <li
              key={event.title}
              className={`flex-none ${index === 0 ? "pl-5 md:pl-0" : ""}`}
            >
              <EventCard
                title={event.title}
                image={event.image}
                location={event.location}
                time={event.time}
                date={event.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
