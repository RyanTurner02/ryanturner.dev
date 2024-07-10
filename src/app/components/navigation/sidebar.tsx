import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex sm:hidden justify-between ml-4 mr-4 ">
      <div>
        <Link className="header-link" href="/">Home</Link>
      </div>
      <div>
        <Link className="header-link" href="/">Lorem</Link>
      </div>
    </div>
  );
}