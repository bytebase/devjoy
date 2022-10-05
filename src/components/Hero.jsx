import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import skateboardImage from '@/images/skateboard.webp'
import bug4Image from '@/images/bug4.webp'

export function Hero() {
  return (
    <div className="relative pt-10 pb-4 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
        <Image
          className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] xl:translate-x-[27%]"
          src={skateboardImage}
          alt=""
          priority
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-slate-900 sm:text-7xl">
            <span className="sr-only">DevJoy - </span>面向开发者的造物节
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-black">
            <p>
              DevJoy 是一个面向开发者 (Developer) 的造物节
              (Joy)，汇聚了开发者感兴趣的方方面面，包括但不限于开发者工具，游戏，键盘，手办，漫画等。
            </p>
            <p>如果您已经是一名开发者，在这里可以找到社区和同伴。</p>
            <p>如果您想成为一名开发者，在这里可以窥见未来的职业。</p>
            <p>
              您也可以只是好奇，从这里开始了解开发者，这群靠着一台电脑就能创造整个世界的灵魂。
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            <Image className="-mt-1 h-7 w-auto" src={bug4Image} alt="" />
            <div>免费预约你的入场券</div>
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['参展商', ' 25'],
              ['参展人数', ' 1200'],
              ['展会场所', 'WeWork 威海路中国旗舰店'],
              ['地点', '上海'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-slate-900">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-black">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
