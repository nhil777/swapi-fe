type Props = {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function RadioInput({
  name,
  label,
  value,
  checked,
  onChange,
  disabled = false,
}: Props) {
  return (
    <div className="mr-[30px] flex items-center">
      <input
        disabled={disabled}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 focus:ring-2"
      />
      <label className="text-gray-400 dark:text-gray-500 ms-2 text-sm font-bold">
        {label}
      </label>
    </div>
  );
}
