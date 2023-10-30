export default function extractShoeSize(text: string): string | null {
  // Regular expression to match the shoe size (a number followed by optional characters)
  const sizeRegex = /(\d+(\.\d+)?)\s?-?\s?/;

  const match = text.match(sizeRegex);
  return match ? match[1] : null;
}
