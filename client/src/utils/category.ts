export function serializeCategory(cat: string) {
  return cat.split("_").join(" ").toUpperCase();
}
