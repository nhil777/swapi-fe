type Props = {
  children: React.ReactNode;
  customClass?: string;
};

export default function Card({ children, customClass }: Props) {
  return (
    <div
      className={`rounded-4 mx-3.5 mb-[30px] border border-gainsboro bg-white p-[30px] shadow-md ${customClass}`}
    >
      {children}
    </div>
  );
}
