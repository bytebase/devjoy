import Image from "next/future/image";
import Container from "./Container";
import juejinChina from "@/public/images/logos/juejin.svg";
import logoOSChina from "@/public/images/logos/oschina.png";
import segmentfaultChina from "@/public/images/logos/segmentfault.png";
import shishuoChina from "@/public/images/logos/shishuo.png";

const medias = [
  { name: "稀土掘金", website: "https://juejin.cn/", logo: juejinChina },
  {
    name: "segmentfault 思否",
    website: "https://segmentfault.com/e/1160000042632666",
    logo: segmentfaultChina,
  },
  {
    name: "开源中国",
    website: "https://www.oschina.net/event/2327167",
    logo: logoOSChina,
  },
  {
    name: "示说",
    website: "https://www.slidestalk.com/m/1262",
    logo: shishuoChina,
  },
];

const Medias = () => {
  return (
    <section id="medias" aria-label="Medias" className="py-20">
      <Container>
        <div className="flex flex-row items-center justify-center space-x-2">
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-900">
            合作社区
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-max grid-cols-2 place-content-center gap-y-12 gap-x-4 sm:grid-cols-4 sm:gap-x-8">
          {medias.map((media) => (
            <a
              href={media.website}
              target="_blank"
              rel="noreferrer"
              key={media.name}
              className="flex items-center justify-center hover:opacity-75"
            >
              <Image src={media.logo} alt={media.name} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Medias;
