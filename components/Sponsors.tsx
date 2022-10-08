import Image from "next/future/image";
import Container from "./Container";
import logoYuque from "@/public/images/logos/yuque.png";
import logoBytebase from "@/public/images/logos/bytebase.png";
import logoWeWork from "@/public/images/logos/wework.png";
import bug1Image from "@/public/images/bug1.webp";

const sponsors = [
  { name: "Bytebase", website: "https://bytebase.com", logo: logoBytebase },
  { name: "WeWork", website: "https://wework.cn", logo: logoWeWork },
  { name: "Yuque", website: "https://yuque.com", logo: logoYuque },
];

const Sponsors = () => {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <div className="flex flex-row items-center justify-center space-x-2">
          <Image className="h-16 w-auto" src={bug1Image} alt="" />
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-900 sm:text-5xl">
            联合主办方
          </h2>
        </div>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noreferrer"
              key={sponsor.name}
              className="flex items-center justify-center hover:opacity-75"
            >
              <Image src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
