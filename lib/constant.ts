export type EventItem = {
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
  slug?: string;
}

export const events: EventItem[] = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 1",
    location: "New York",
    slug: "event-1",
    date: "2023-12-12",
    time: "18:00",
  },
  {
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 2",
    location: "San Francisco",
    slug: "event-2",
    date: "2023-12-12",
    time: "18:00",
  },
  {
    image: "https://images.unsplash.com/photo-1727434032773-af3cd98375ba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 3",
    location: "London",
    slug: "event-3",
    date: "2023-12-12",
    time: "18:00",
  },
];