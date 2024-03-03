type Props = {
  children: any;
};

export default function CardContentCentered({ children }: Props) {
  return (
    <div className="flex h-full min-h-[270px] items-center justify-center">
      <p className="text-center text-sm font-bold text-gray">{children}</p>
    </div>
  );
}
