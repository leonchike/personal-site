import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm bg-gray-100 py-1 px-2 rounded-sm text-gray-700 hover:bg-gray-200 transition-colors duration-200"
    >
      Signout
    </button>
  );
}
