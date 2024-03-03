type Props = {
  children: any;
};

export default function Container({ children }: Props) {
  return <div className="flex justify-center gap-[30px]">{children}</div>;
}
