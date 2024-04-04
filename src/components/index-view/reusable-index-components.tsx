export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-[25vw] md:text-[12vw] text-center">
      {children}
    </h2>
  );
}
