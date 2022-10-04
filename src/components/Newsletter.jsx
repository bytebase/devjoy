import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'
import wechatImage from '@/images/wechat.webp'

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-slate-900 py-16 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24">
          {/* <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
          /> */}
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
                关注 DevJoy 公众号获取最新活动资讯
              </p>

              <p className="mt-8 font-display text-2xl font-medium tracking-tighter text-white">
                2022.11.05 ~ 06 (周六，周日)
              </p>

              <p className="mt-2 font-display text-2xl font-medium tracking-tighter text-white">
                上海静安区威海路 696 号 WeWork 中国旗舰店
              </p>
            </div>
            <Image
              className="inset-0 h-72 object-contain"
              src={wechatImage}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
