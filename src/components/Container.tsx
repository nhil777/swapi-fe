type Props = {
  children: any;
};

export default function Container({ children }: Props) {
  return (
    <section className="max-w-full justify-center gap-[30px] md:flex">
      {children}
    </section>
  );
}
