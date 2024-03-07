import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const logoSize = 40;
  return (
    <div className="p-12 bg-neutral-400">
      <div className="grid grid-cols-4 grid-flow-col gap-4">
        <div>
          <p className="font-bold text-4xl">FinScope AI</p>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">SOCIALS</p>
          <div className="flex flex-row gap-x-4">
            {/* Change the divs inside the Link */}
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-neutral-800"></div>
            </Link>
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-neutral-800"></div>
            </Link>
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-neutral-800"></div>
            </Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">LINKS</p>
          <div className="flex flex-col">
            <Link href="#" className="text-xl">Some Link</Link>
            <Link href="#" className="text-xl">Another Link</Link>
            <Link href="#" className="text-xl">Even More Link</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">LINKS</p>
          <div className="flex flex-col">
            <Link href="#" className="text-xl">Link On Second Column</Link>
            <Link href="#" className="text-xl">Another Link On Second Column</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
