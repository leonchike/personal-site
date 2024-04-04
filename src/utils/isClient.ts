export function isClient() {
  console.log(typeof window === "undefined" ? false : true);
  return typeof window === "undefined" ? false : true;
}
