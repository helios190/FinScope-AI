import Link from "next/link";

export default function Splash() {
  return (
    <div className="flex flex-col items-center p-16 bg-neutral-400">
      <p className="font-bold text-6xl mb-8">FinScope AI</p>
      <p className="text-lg text-wrap text-center max-w-[60%] mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua
      </p>
      <Link href="/upload">
        <button className="text-white bg-neutral-800 px-32 py-2 rounded-lg hover:bg-neutral-900">Start</button>
      </Link>
    </div>
  );
}
