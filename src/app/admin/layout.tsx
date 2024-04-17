import { isUserAuthorized } from "@/actions/auth-actions";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await isUserAuthorized();

  if (!session) {
    redirect("/auth/signin");
    return null;
  }

  return <div className="">{children}</div>;
}
