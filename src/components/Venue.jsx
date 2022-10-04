import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import weworkImage from '@/images/wework.webp'

export function Venue() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20">
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
      <div className="relative mt-14">
        {/* <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div> */}
        <Container className="relative">
          <Image className="" src={weworkImage} alt="" />
        </Container>
      </div>
    </section>
  )
}
