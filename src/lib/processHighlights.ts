// Function to convert ===text=== to <mark>text</mark>
export const processHighlights = (text: string): string => {
  return text.replace(/===([^=]+)===/g, '<mark>$1</mark>')
}
