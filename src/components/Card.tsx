type Props = {
  children: any;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-4 border-gainsboro mx-[30px] my-[30px] w-[410px] border bg-white p-[30px] shadow-md">
      {children}
    </div>
  );
}
