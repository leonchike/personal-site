/* eslint-disable @next/next/no-img-element */
import { signIn } from "@/auth";

export default async function SignInPage() {
  const googleLogoUrl =
    "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA";

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-medium mb-6">
          Sign In <small>- Private</small>
        </h1>
        <form
          className="flex flex-col items-center"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
        >
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded flex items-center gap-2"
          >
            <img
              src={googleLogoUrl}
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </main>
  );
}
