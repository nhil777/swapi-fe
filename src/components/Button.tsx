type Props = {
  children: any;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export default function Button({
  children,
  disabled = false,
  type = 'button',
}: Props) {
  return (
    <button
      className="mt-[30px] h-[34px] w-full cursor-pointer rounded-full bg-greenTeal text-base font-bold uppercase text-white outline-none disabled:cursor-not-allowed disabled:bg-gray"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
