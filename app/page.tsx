import LandingLogo from "../public/logo.png"
import Image from "next/image";
import LightRays from "./components/LightRays"
import Countdown from "./components/countdown";
import Wrapper from "./components/wrapper";

export default function Home() {
  return (<>
    <Wrapper>
        <div className="w-full h-screen bg-black">
            <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="top" lightSpread={2} pulsating={false}/>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center w-full flex-col">
            <Image src={LandingLogo} className="w-180" alt="landing-logo"/>
            <Countdown/>
          </div>
          <div className="w-full h-screen bg-black flex flex-row">
            <div className="flex w-full h-screen justify-center">
                <h1 className="text-[#efdb92] text-6xl">Sponsers</h1>
            </div>
          </div>

          <div className="w-full h-300 bg-black flex justify-center p-10">
            <h1 className="text-[#efdb92] text-6xl">Updates</h1>
          </div>


        </div>
    </Wrapper>
    </>
    
  );
}
