type Props = {
  children: any;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  customClass?: string;
  onClick: any;
};

export default function Button({
  children,
  disabled = false,
  type = 'button',
  customClass = '',
  onClick,
}: Props) {
  return (
    <button
      className={`hover:bg-emerald h-[34px] w-full cursor-pointer rounded-full bg-greenTeal text-sm font-bold uppercase text-white outline-none disabled:cursor-not-allowed disabled:bg-gray ${customClass}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
