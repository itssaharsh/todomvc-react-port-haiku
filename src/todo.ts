export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// Same shape as the legacy util.uuid(): a random v4-style id built from Math.random,
// so it works in non-secure contexts where crypto.randomUUID is unavailable.
export function uuid(): string {
  let result = '';
  for (let i = 0; i < 32; i++) {
    const random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      result += '-';
    }
    const digit = i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random;
    result += digit.toString(16);
  }
  return result;
}

export function pluralize(count: number, word: string): string {
  return count === 1 ? word : `${word}s`;
}
