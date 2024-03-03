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
      className="bg-greenTeal disabled:bg-gray mt-[30px] h-[34px] w-[350px] cursor-pointer rounded-full text-base font-bold uppercase text-white outline-none disabled:cursor-not-allowed"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
