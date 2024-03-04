type Props = {
  title: string;
  testId?: string;
};

export default function CardTitle({ title, testId }: Props) {
  return (
    <div>
      <h2 className="text-lg font-bold" test-id={testId}>
        {title}
      </h2>
    </div>
  );
}
