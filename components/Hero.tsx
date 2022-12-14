/* eslint-disable @next/next/no-img-element */
import Image from "next/future/image";
import { useEffect, useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import skateboardImage from "@/public/images/skateboard.webp";
import codeImage from "@/public/images/lifestyle/code.webp";
import bug4Image from "@/public/images/bug4.webp";

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
      sloganContainerRef.current.parentElement?.clientWidth;
      const mx =
        sectionContainerRef.current.clientWidth -
        sloganContainerRef.current.clientWidth;

      if (document.body.clientWidth >= TAILWIND_LG_WIDTH) {
        imageContainerRef.current.style.left = `${
          sloganContainerRef.current?.clientWidth + mx / 2 - 240
        }px`;
        imageContainerRef.current.style.height = `${
          sectionContainerRef.current.clientHeight + 60
        }px`;
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
          <Image
            className="absolute -mt-12 -ml-12 hidden sm:block h-20 w-auto mr-2"
            src={codeImage}
            alt=""
          />
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tighter text-slate-900 sm:text-7xl">
            <span className="sr-only">DevJoy - </span> ?????????????????????
          </h1>
          <div className="mt-12 space-y-4 font-display text-2xl tracking-tight text-black">
            <p>????????????????????? (Developer) ???????????? (Joy)???</p>
            <p>???????????????????????????????????????????????????????????????????????????</p>
            <p>???????????????????????????????????????????????????????????????????????????</p>
            <p>???????????????????????????????????????????????????????????????????????????</p>
          </div>
          <Button
            href="https://app.ma.scrmtech.com/meetings-api/sapIndex/SapSourceData?pf_uid=14483_1648&sid=68471&source=2&pf_type=3&channel_id=4568&channel_name=Partner+WeChat+OA&tag_id=98362307a04a5e44"
            className="mt-10 w-full text-xl py-5 items-center sm:hidden"
          >
            <Image className="-mt-1 h-8 w-auto" src={bug4Image} alt="" />
            <div>?????????????????????</div>
          </Button>
          <dl className="mt-8 grid grid-cols-1 gap-y-6 gap-x-10 sm:mt-12 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[["????????????", "??????????????????????????? 696 ??? WeWork ???????????????"]].map(
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
        className="mt-8 shrink-0 h-auto w-full max-w-3xl mx-auto lg:absolute lg:left-full lg:h-full lg:-mt-28 lg:w-full"
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
