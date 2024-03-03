type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <section className="justify-center md:flex">{children}</section>;
}
