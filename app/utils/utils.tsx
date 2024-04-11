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

export async function checkIfUrlIsImage(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type") || "";
    return contentType.startsWith("image/");
  } catch (error) {
    console.error("Error checking URL:", error);
    return false;
  }
}
