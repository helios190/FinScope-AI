import Description from "@/components/landing_page/Description";
import Teams from "@/components/landing_page/Teams";
import Splash from "@/components/landing_page/Splash";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Splash />
      <div className="flex flex-col p-12 gap-y-8">
        <Description />
        <Teams />
        <div className="flex justify-center text-center">Will be updated soon...</div>
      </div>
    </>
  );
}
