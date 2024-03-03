type Props = {
  children: any;
  customClass?: string;
};

export default function Card({ children, customClass }: Props) {
  return (
    <div
      className={`rounded-4 mx-[30px] my-[30px] min-h-[270px] max-w-[582px] border border-gainsboro bg-white p-[30px] shadow-md md:min-w-[410px] ${customClass}`}
    >
      {children}
    </div>
  );
}
