import Image from "next/future/image";
import Button from "./Button";
import Container from "./Container";
import DiamondIcon from "./DiamondIcon";
import Logo from "./Logo";
import bug4Image from "@/public/images/bug4.webp";

const Header = () => {
  return (
    <header className="relative z-50 pb-4 sm:pb-10 lg:pt-10">
      <Container className="w-full flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 shrink-0 lg:mt-0 lg:grow lg:basis-1/4">
          <Logo className="h-24 w-auto text-slate-900 shrink-0" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-base sm:text-xl text-slate-900 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-2/4 lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-11-05" className="mr-1">
                2022.11.05
              </time>
              ~
              <time dateTime="2022-11-06" className="ml-1">
                06
              </time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Shanghai, China</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-1/4 lg:justify-end">
          <Button
            href="https://app.ma.scrmtech.com/meetings-api/sapIndex/SapSourceData?pf_uid=14483_1648&sid=68471&source=2&pf_type=3&channel_id=4568&channel_name=Partner+WeChat+OA&tag_id=98362307a04a5e44"
            className="items-center text-lg"
          >
            <Image className="-mt-1 h-8 w-auto" src={bug4Image} alt="" />
            <div>免费预约入场券</div>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
