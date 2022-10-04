import Image from 'next/future/image'
import logoDevJoy from '@/images/logos/devjoy.webp'

export function Logo(props) {
  return <Image src={logoDevJoy} alt="" {...props} />
}
