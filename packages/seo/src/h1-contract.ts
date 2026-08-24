export type H1Inspection = Readonly<{
  count: number;
  text: string;
  errors: readonly string[];
}>;

function plainText(markup: string): string {
  return markup
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function inspectH1(html: string): H1Inspection {
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const errors: string[] = [];
  const firstHeadingMarkup = headings[0]?.[1] ?? "";
  const text = plainText(firstHeadingMarkup);

  if (headings.length !== 1) {
    errors.push(`Expected exactly one H1, found ${headings.length}.`);
  }

  if (!/[\p{L}\p{N}]/u.test(text)) {
    errors.push("H1 must contain meaningful text.");
  }

  const singleCharacterSpans = [
    ...firstHeadingMarkup.matchAll(
      /<span\b[^>]*>\s*[\p{L}\p{N}]\s*<\/span>/giu,
    ),
  ];

  if (singleCharacterSpans.length >= 4) {
    errors.push("H1 must not split words into character spans.");
  }

  return { count: headings.length, text, errors };
}
