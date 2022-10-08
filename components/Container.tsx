import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Container = (props: Props) => {
  const { className, children } = props;
  return <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
};

export default Container;
