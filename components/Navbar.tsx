import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4">
        <Link href="/">Logo</Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/create">Create Events</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
