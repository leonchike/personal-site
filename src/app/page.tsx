import { WidthWrapper } from "@/components/ui/layout";
import Header from "@/components/header";

export default function Home() {
  return (
    <WidthWrapper>
      <Header />
      <div className="text-4xl text-red-600">Hello</div>
    </WidthWrapper>
  );
}
