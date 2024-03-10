import Link from "next/link";
import NoImage from "../placeholder/NoImage";

export default function Description() {
  return (
    <div className="grid grid-row-2 md:grid-cols-2 gap-x-8">
      <div className="rounded-xl min-h-48 mb-8 md:mb-0 md:order-last">
        <NoImage className="text-black border-black" />
      </div>
      <div>
        <p className="text-lg mb-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <Link href="/upload">
          <button className="text-black bg-secondary-300 w-full py-2 rounded-lg hover:bg-neutral-900">Start</button>
        </Link>
      </div>
    </div>
  );
}
