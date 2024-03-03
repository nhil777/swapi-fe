type Props = {
  title: string;
};

export default function CardTitle({ title }: Props) {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
}
