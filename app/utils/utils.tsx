export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

export function getClassNameBasedOnDarkMode(
  isDarkMode: boolean,
  className: string
) {
  return `${className}${isDarkMode ? " dark" : ""}`;
}

export function getMeta(title: string) {
  return [
    { title: `${title} | Find Your Next Job` },
    {
      name: "description",
      content:
        "Find you next job easily, search fast through jobs posted on linkedln, google etc.",
    },
  ];
}
