import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  className: string;
  children?: React.ReactNode;
}

const Button = ({ href, className, ...props }: Props) => {
  className = clsx(
    "inline-flex justify-center rounded-2xl bg-slate-900 p-4 text-base font-semibold text-white hover:opacity-75 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};

export default Button;
