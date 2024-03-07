import Link from "next/link";
import NoImage from "../placeholder/NoImage";

export default function Description() {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      <div>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <Link href="/upload">
          <button className="text-white bg-neutral-800 w-full py-2 rounded-lg hover:bg-neutral-900">Start</button>
        </Link>
      </div>
      <div className="rounded-xl">
        <NoImage/>
      </div>
    </div>
  );
}
