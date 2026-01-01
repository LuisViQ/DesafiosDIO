export function validateUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}
