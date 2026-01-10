"use client";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { EventItem } from "@/lib/constant";

const EventCard = ({ title, image, location, date, time, slug }: EventItem) => {
  const handleEventCardClick = () => {
    posthog.capture("event_card_clicked", {
      event_title: title,
      event_location: location,
      event_date: date,
      event_time: time,
      event_slug: slug,
    });
  };

  return (
    <Link className="block mb-12" href={`/events/${slug}`} onClick={handleEventCardClick}>
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
