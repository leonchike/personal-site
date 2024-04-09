import clsx from "clsx";

export function SectionTitle({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "font-serif text-[20vw] lg:text-[18vw] xl:text-[11vw] text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
