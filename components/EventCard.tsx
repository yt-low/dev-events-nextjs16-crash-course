import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/lib/constant";

const EventCard = ({ title, image, location, date, time, slug }: EventItem) => {
  return (
    <Link className="block mb-12" href={`/events/${slug}`}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="poster w-full h-auto"
      />
      <small>{location}</small>
      <p className="title text-lg font-bold">{title}</p>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </Link>
  );
};
export default EventCard;
