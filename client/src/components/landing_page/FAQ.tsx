import Image from "next/image";
import QuestionCircleFill from "../icons/QuestionCircleFill";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center gap-y-6 text-white">
      <p className="font-bold text-4xl text-center">Frequently Asked Question</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 w-full">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">
            <QuestionCircleFill width={24} height={24} />
            <p className="font-bold text-xl">What even is this?</p>
          </div>
          <p className="text-lg">idk</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">
            <QuestionCircleFill width={24} height={24} />
            <p className="font-bold text-xl">How does it work?</p>
          </div>
          <p className="text-lg">idk</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">
            <QuestionCircleFill width={24} height={24} />
            <p className="font-bold text-xl">Is this safe?</p>
          </div>
          <p className="text-lg">probably</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">
            <QuestionCircleFill width={24} height={24} />
            <p className="font-bold text-xl">Can you give a longer answer?</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
