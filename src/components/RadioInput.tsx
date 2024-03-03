type Props = {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioInput({
  name,
  label,
  value,
  checked,
  onChange,
}: Props) {
  return (
    <div className="mr-[30px] flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label className="ms-2 text-sm font-bold text-gray-400 dark:text-gray-500">
        {label}
      </label>
    </div>
  );
}
