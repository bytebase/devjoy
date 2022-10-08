import clsx from "clsx";
import Image from "next/future/image";
import logoDevJoy from "@/public/images/logos/devjoy.webp";

interface Props {
  className: string;
}

const Logo = (props: Props) => {
  const { className } = props;

  return <Image src={logoDevJoy} className={clsx(className)} alt="" />;
};

export default Logo;
