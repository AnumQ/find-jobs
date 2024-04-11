export function truncateText(text: string, limit = 670): string {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
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
