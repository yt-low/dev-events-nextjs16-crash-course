"use client";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
  const handleNavClick = (
    eventName: string,
    destination: string
  ) => {
    posthog.capture(eventName, {
      destination: destination,
      navigation_location: "header",
    });
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-5 md:px-10">
        <Link
          href="/"
          onClick={() => handleNavClick("nav_logo_clicked", "/")}
        >
          Logo
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            onClick={() => handleNavClick("nav_home_clicked", "/")}
          >
            Home
          </Link>
          <Link
            href="/events"
            onClick={() => handleNavClick("nav_events_clicked", "/events")}
          >
            Events
          </Link>
          <Link
            href="/create"
            onClick={() => handleNavClick("nav_create_event_clicked", "/create")}
          >
            Create Events
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
