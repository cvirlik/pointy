export function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return formatter.format(date);
}
