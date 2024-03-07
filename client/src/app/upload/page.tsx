import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>I&apos;ll add the upload field so heres a back button</p>
      <Link href="/">
        <button className="text-white bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-900">Back</button>
      </Link>
    </div>
  );
}
