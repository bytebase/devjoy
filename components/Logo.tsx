import Image from "next/future/image";
import logoDevJoy from "@/public/images/logos/devjoy.webp";

interface Props {
  className: string;
}

const Logo = (props: Props) => {
  return <Image src={logoDevJoy} alt="" {...props} />;
};

export default Logo;
