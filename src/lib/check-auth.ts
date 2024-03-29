"use client";

export default function checkAuth() {
  console.log("checkAuth");
  if (typeof window !== "undefined") {
    const code =
      !!window && window.localStorage && localStorage.getItem("code");
    const env_code = process.env.NEXT_PUBLIC_ADMIN_CODE;

    if (!code) {
      console.log("code is not set");
      return false;
    } else if (code === env_code) {
      console.log("code is correct");
      return true;
    }
  }
  return false;
}
