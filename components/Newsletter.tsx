import Image from "next/future/image";
import Container from "./Container";
import standImage from "@/public/images/stand.webp";
import wechatImage from "@/public/images/wechat.webp";

const Newsletter = () => {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-slate-900 py-16 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
                关注公众号获取预约方式
              </p>
              <p className="mt-8 font-display text-2xl font-medium tracking-tighter text-white">
                2022.11.05 ~ 06 (周六，周日)
              </p>
              <p className="mt-2 font-display text-2xl font-medium tracking-tighter text-white">
                上海静安区威海路 696 号 WeWork 中国旗舰店
              </p>
            </div>
            <div className="flex h-72 flex-row space-x-8 object-contain">
              <Image src={wechatImage} className="w-auto" alt="" />
              <Image src={standImage} className="w-auto" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
