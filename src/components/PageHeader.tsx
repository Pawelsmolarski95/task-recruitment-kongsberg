import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageHeader({
  children,
  className,
}: Props) {
  return (
    <h1
      className={clsx(
        "font-black uppercase text-2xl tracking-widest text-center py-5",
        "md:py-10 md:text-3xl",
        "dark:text-gradient-gold",
        className
      )}
    >
      {children}
    </h1>
  );
}
