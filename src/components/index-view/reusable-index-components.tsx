export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-[25vw] lg:text-[20vw] xl:text-[14vw] text-center">
      {children}
    </h2>
  );
}
