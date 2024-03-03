type Props = {
  children: any;
};

export default function Container({ children }: Props) {
  return <section className="justify-center md:flex">{children}</section>;
}
