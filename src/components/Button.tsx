type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  customClass?: string;
  onClick: any;
  testId?: string;
};

export default function Button({
  children,
  disabled = false,
  type = 'button',
  customClass = '',
  onClick,
  testId,
}: Props) {
  return (
    <button
      className={`h-[34px] w-full cursor-pointer rounded-full bg-greenTeal text-sm font-bold uppercase text-white outline-none hover:bg-emerald disabled:cursor-not-allowed disabled:bg-gray ${customClass}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      test-id={testId}
    >
      {children}
    </button>
  );
}
