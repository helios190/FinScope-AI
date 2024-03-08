import Description from "@/components/landing_page/Description";
import Teams from "@/components/landing_page/Teams";
import Splash from "@/components/landing_page/Splash";
import Disclaimer from "@/components/landing_page/Disclaimer";

export default function Home() {
  return (
    <>
      <Splash />
      <div className="flex flex-col p-12 gap-y-8">
        <Description />
        <Teams />
        {/* ill take care of this later */}
        {/* <div className="grid grid-cols-2">
            <FAQ question="oiwoecboiebocbi??">
                <p className="text=lg">Answer</p>
            </FAQ>
        </div> */}
        
        <div className="flex justify-center text-center">faq (will be updated, probably)</div>
        <Disclaimer/>
      </div>
    </>
  );
}
