export function routePlanPathnames(csv: string): string[] {
  return csv
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.split(",", 1)[0]?.trim() ?? "")
    .filter((route) => route.startsWith("/"));
}
