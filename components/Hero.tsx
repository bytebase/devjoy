/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Container from "./Container";
import skateboardImage from "@/public/images/skateboard.webp";

const TAILWIND_LG_WIDTH = 1024;

const Hero = () => {
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const sloganContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleWindowResize = () => {
    if (
      sectionContainerRef.current &&
      sloganContainerRef.current &&
      imageContainerRef.current
    ) {
      if (document.body.clientWidth >= TAILWIND_LG_WIDTH) {
        sloganContainerRef.current.parentElement?.clientWidth;
        const mx =
          sectionContainerRef.current.clientWidth -
          sloganContainerRef.current.clientWidth;
        // 160 has a better spacing lookings.
        imageContainerRef.current.style.left = `${
          sloganContainerRef.current?.clientWidth + mx / 2 - 160
        }px`;
        imageContainerRef.current.style.height = `${sectionContainerRef.current.clientHeight}px`;
      } else {
        imageContainerRef.current.style.height = `unset`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    handleWindowResize();
  }, [sloganContainerRef, imageContainerRef]);

  return (
    <div
      className="relative pt-10 pb-4 mx-auto w-full flex flex-col justify-start items-start max-w-full overflow-hidden lg:py-24"
      ref={sectionContainerRef}
    >
      <Container className="relative w-full z-10 flex justify-center">
        <div className="relative w-full max-w-3xl" ref={sloganContainerRef}>
          <h1 className="font-display text-5xl font-bold tracking-tighter text-slate-900 sm:text-7xl">
            <span className="sr-only">DevJoy - </span>面向开发者的游园会
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-black">
            <p>
              DevJoy 是一个面向开发者 (Developer) 的游园会
              (Joy)，汇聚了开发者感兴趣的方方面面，包括但不限于开发者工具，游戏，键盘，手办，漫画等。
            </p>
            <p>如果您已经是一名开发者，在这里可以找到社区和同伴。</p>
            <p>如果您想成为一名开发者，在这里可以窥见未来的职业。</p>
            <p>
              您也可以只是好奇，从这里开始了解开发者，这群靠着一台电脑就能创造整个世界的灵魂。
            </p>
          </div>
          {/* <Button href="#" className="mt-10 w-full sm:hidden">
            <Image className="-mt-1 h-7 w-auto" src={bug4Image} alt="" />
            <div>免费预约入场券</div>
          </Button> */}
          <dl className="mt-10 grid grid-cols-1 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[["展会地点", "上海市静安区威海路 696 号 WeWork 中国旗舰店"]].map(
              ([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-base text-slate-900">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-black">
                    {value}
                  </dd>
                </div>
              )
            )}
          </dl>
        </div>
      </Container>
      <div
        className="mt-8 shrink-0 h-auto w-full lg:absolute lg:left-full lg:h-full lg:-mt-24 lg:w-full"
        ref={imageContainerRef}
      >
        <img
          className="h-auto lg:h-full w-auto max-w-full"
          src={skateboardImage.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
