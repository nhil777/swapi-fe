type Props = {
  children: any;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-4 mx-[30px] my-[30px] border border-gainsboro bg-white p-[30px] shadow-md">
      {children}
    </div>
  );
}
