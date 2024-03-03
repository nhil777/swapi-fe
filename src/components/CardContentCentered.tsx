type Props = {
  children: any;
};

export default function CardContentCentered({ children }: Props) {
  return (
    <div className="flex h-full min-h-[270px] items-center justify-center">
      <div className="text-center text-sm font-bold text-gray">{children}</div>
    </div>
  );
}
