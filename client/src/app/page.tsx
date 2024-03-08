import Description from "@/components/landing_page/Description";
import Teams from "@/components/landing_page/Teams";
import Splash from "@/components/landing_page/Splash";
import Disclaimer from "@/components/landing_page/Disclaimer";
import FAQ from "@/components/landing_page/FAQ";

export default function Home() {
  return (
    <>
      <Splash />
      <div className="flex flex-col p-12 gap-y-16">
        <Description />
        <Teams />
        <FAQ/>
        <Disclaimer/>
      </div>
    </>
  );
}
