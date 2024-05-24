import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="translate-y-px">
        <path fill="#0199FE" d="M0,50C480,100,960,0,1440,50L1440,100L0,100Z" />
        <path fill="#017DD0" d="M0,50C480,0,960,100,1440,50L1440,100L0,100Z" />
      </svg>
      <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 bg-primary-600">
        <div>
          <Link href="/">
            <p className="font-bold text-4xl">FinScope AI</p>
          </Link>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">SOCIALS</p>
          <div className="flex flex-row gap-x-4">
            {/* Change the divs inside the Link */}
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-white"></div>
            </Link>
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-white"></div>
            </Link>
            <Link href="#">
              <div className="aspect-square w-10 rounded-lg bg-white"></div>
            </Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">LINKS</p>
          <div className="flex flex-col">
            <Link href="#" className="text-xl">
              Some Link
            </Link>
            <Link href="#" className="text-xl">
              Another Link
            </Link>
            <Link href="#" className="text-xl">
              Even More Link
            </Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">LINKS</p>
          <div className="flex flex-col">
            <Link href="#" className="text-xl">
              Link On Second Column
            </Link>
            <Link href="#" className="text-xl">
              Another Link On Second Column
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
