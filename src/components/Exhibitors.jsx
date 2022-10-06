import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import awsImage from '@/images/logos/aws.png'
import bytebaseImage from '@/images/logos/bytebase.png'
import candySignImage from '@/images/logos/candysign.svg'
import crealityImage from '@/images/logos/creality.png'
import goomicsImage from '@/images/logos/goomics.png'
import microsoftImage from '@/images/logos/microsoft.png'
import monkeyUserImage from '@/images/logos/monkeyuser.png'
import orangeCatImage from '@/images/logos/orangecat.png'
import pingcapImage from '@/images/logos/pingcap.png'
import showMeBugImage from '@/images/logos/showmebug.svg'
import xdImage from '@/images/logos/xd.png'
import yuqueImage from '@/images/logos/yuque.png'
import bug3Image from '@/images/bug3.webp'

const exhibitors = [
  {
    name: 'AWS',
    website: 'https://aws.amazon.com',
    image: awsImage,
  },
  {
    name: 'Bytebase',
    website: 'https://bytebase.com',
    image: bytebaseImage,
  },
  {
    name: 'CANDYSIGN 制糖工厂',
    website: 'https://www.thecandysign.com/',
    image: candySignImage,
  },
  {
    name: '创想三维',
    website: 'https://creality.cn',
    image: crealityImage,
  },
  {
    name: 'Goomics',
    website: 'http://goomics.net',
    image: goomicsImage,
  },
  {
    name: '橘猫工业',
    website: 'http://www.orangecat.fun',
    image: orangeCatImage,
  },
  {
    name: 'Microsoft',
    website: 'https://developer.microsoft.com/en-us/reactor',
    image: microsoftImage,
  },
  {
    name: 'MonkeyUser',
    website: 'https://www.monkeyuser.com',
    image: monkeyUserImage,
  },
  {
    name: 'PingCAP',
    website: 'https://pingcap.com',
    image: pingcapImage,
  },
  {
    name: 'ShowMeBug',
    website: 'https://showmebug.com',
    image: showMeBugImage,
  },
  {
    name: '心动游戏',
    website: 'https://xd.com',
    image: xdImage,
  },
  {
    name: '语雀',
    website: 'https://yuque.com',
    image: yuqueImage,
  },
]

export function Exhibitors() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <div className="flex flex-row items-center space-x-2">
            <Image className="h-16 w-auto" src={bug3Image} alt="" />
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-slate-900 sm:text-5xl"
            >
              参展商
            </h2>
          </div>
          <p className="mt-4 font-display text-2xl tracking-tight text-black">
            从国际知名大厂到个人工作室，我们找来了那些内容有趣，开发者喜欢的展出。
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none">
          {exhibitors.map((exhibitor, exhibitorIndex) => (
            <div key={exhibitorIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl border-2 border-black">
                <a
                  href={exhibitor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-white"
                  style={{ clipPath: `url(#${id}-${exhibitorIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-contain p-8 transition duration-300 group-hover:scale-110"
                    src={exhibitor.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </a>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-black">
                {exhibitor.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
