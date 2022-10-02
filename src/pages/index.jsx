import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Venue } from '@/components/Venue'
import { Exhibitors } from '@/components/Exhibitors'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevJoy - 开发者的造物节 </title>
        <meta
          name="description"
          content="DevJoy 是一个面向开发者 (Developer) 的造物节 (Joy)，汇聚了开发者感兴趣的方方面面，包括但不限于开发者工具，游戏，键盘，手办，漫画等。"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Exhibitors />
        <Venue />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
