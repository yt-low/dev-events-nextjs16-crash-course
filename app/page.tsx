import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constant";

const Page = () => {
  return (
    <section>
      <h1 className="text-center text-4xl text-shadow-2xs font-bold mb-4 bg-gradient-to-b from-white to-[#aaa] bg-clip-text text-transparent">
        The Hub for every developer
        <br />
        Event you can't miss
      </h1>
      <p className="text-center">Hackathons, Meetups, and Conference.</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3 className="text-xl font-bold">Featured Events</h3>
        <ul className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <li key={event.title}>
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
