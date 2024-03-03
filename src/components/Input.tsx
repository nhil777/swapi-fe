type Props = {
  name: string;
  placeholder: string;
  autoFocus?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Input({
  name,
  placeholder,
  autoFocus = false,
  value,
  onChange,
  disabled = false,
}: Props) {
  return (
    <input
      disabled={disabled}
      className="mt-3.5 h-[40px] w-full rounded border border-gray bg-white p-[10px] text-base shadow-inner outline-none"
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
    />
  );
}
