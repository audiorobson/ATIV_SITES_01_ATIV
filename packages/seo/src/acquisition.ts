export const acquisitionParameterNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
] as const;

export type AcquisitionParameterName =
  (typeof acquisitionParameterNames)[number];
export type AcquisitionContext = Partial<
  Record<AcquisitionParameterName, string>
>;

const maximumParameterLength = 512;

export function readAcquisitionContext(
  searchParams: URLSearchParams,
): AcquisitionContext {
  const context: AcquisitionContext = {};

  for (const name of acquisitionParameterNames) {
    const value = searchParams.get(name)?.trim();

    if (value) {
      context[name] = value.slice(0, maximumParameterLength);
    }
  }

  return context;
}
