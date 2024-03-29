"use client";

import { redirect } from "next/navigation";
import AdminView from "@/components/admin-view/admin-view";

import checkAuth from "@/lib/check-auth";

export default function Page() {
  let isAuthenticated = false;

  if (typeof window !== "undefined") {
    const isAuth = checkAuth();
    isAuthenticated = isAuth;

    if (!isAuth) {
      redirect("/login");
    }
  }

  if (isAuthenticated) {
    return <AdminView />;
  } else {
    return redirect("/login");
  }
}
