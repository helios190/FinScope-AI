import Description from "@/components/landing_page/Description";
import Teams from "@/components/landing_page/Teams";
import Splash from "@/components/landing_page/Splash";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Splash />
      <Description />
      <Teams />
      <div className="flex justify-center text-center mb-8">Will be updated soon...</div>
    </>
  );
}
