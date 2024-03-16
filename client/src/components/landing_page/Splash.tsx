"use client";

import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Splash() {
  const size = useWindowSize();
  // somewhat responsive? (still wondering what itll should look like in mobile)
  function generateBackground(width: number, height: number) {
    const TARGET_WIDTH = 1440;
    const TARGET_HEIGHT = 500;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500" className="absolute bottom-0">
        <mask id="splashBackgroundMask">
          <path fill="white" d="M1440,450L1440,0L0,0L0,450 C480,500,960,500,1440,450" />
        </mask>
        <g mask="url(#splashBackgroundMask)">
          <rect width="1440" height="500" fill="#017DD0" />
          {(() => {
            const bars = Math.floor(TARGET_WIDTH / 72);
            const f = (x: number) => ((x + 1) / bars) ** 3;

            const nodes = [];
            for (let i = 0; i < bars; i++) {
              if (i % 2 == 0)
                nodes.push(
                  <rect
                    x={(i * TARGET_WIDTH) / bars}
                    y={(1 - f(i + 1)) * TARGET_HEIGHT}
                    width="72.0"
                    height={f(i + 1) * TARGET_HEIGHT}
                    rx="18.0"
                    fill="#0199FE"
                  >
                    <animate
                      attributeName="y"
                      values={`500;500;${(1 - f(i + 1)) * TARGET_HEIGHT};${(1 - f(i + 1)) * TARGET_HEIGHT}`}
                      dur="2s"
                      calcMode="spline"
                      keyTimes={`0;${i / (2 * bars)};${(i + bars) / (2 * bars)};1`}
                      keySplines="0.16, 1, 0.3, 1;0.16, 1, 0.3, 1;0.16, 1, 0.3, 1"
                      repeatCount="once"
                    />
                  </rect>
                );
            }
            return nodes;
          })()}
        </g>
      </svg>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-[32rem]">
      <span className="absolute top-0 md:h-1/2 sm:h-3/4 h-4/5 w-full bg-primary-600" />
      {generateBackground(size.width ?? 1440, 500)}
      <div className="relative z-10 flex flex-col items-center p-16">
        <p className="font-bold text-4xl text-neutral-100 lg:text-6xl mb-8">FinScope AI</p>
        <p className="text-lg text-wrap text-center text-neutral-100 md:max-w-[60%] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
        <Link href="/upload">
          <button className="text-black bg-secondary-400 px-32 py-2 rounded-lg hover:bg-secondary-600">Start</button>
        </Link>
      </div>
    </div>
  );
}
