import Image from "next/future/image";
import Container from "./Container";
import weworkImage from "@/public/images/wework.webp";

const Venue = () => {
  return (
    <section id="schedule" aria-label="Schedule" className="py-4">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-slate-900 sm:text-5xl">
            威海路 696 号
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-black">
            古典的建筑，历史的空间，现代的创作。
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-black">
            WeWork 中国旗舰办公点——威海路 696
            是南京西路商圈中闹中取静的所在。这栋伦敦风格别墅建于 20 世纪初，曾有
            40 余个艺术工作室和展览厅在此。如今，WeWork
            将其改造成为古典与现代相结合的优美工作场所：明亮宽敞的开放式中庭、别具一格的旋转楼梯，让人们在此联结，激发更多创造力。
          </p>
        </div>
      </Container>
      <div className="relative z-10 mt-14">
        <Container className="relative">
          <Image className="" src={weworkImage} alt="" />
        </Container>
      </div>
    </section>
  );
};

export default Venue;
