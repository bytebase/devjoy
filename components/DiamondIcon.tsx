interface Props {
  className: string;
}

const DiamondIcon = (props: Props) => {
  const { className } = props;

  return (
    <svg aria-hidden="true" viewBox="0 0 6 6" className={className}>
      <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
};

export default DiamondIcon;
