export type Locale = "en" | "pt" | "es";

const FEAR_GREED_PT: Record<string, string> = {
  "Extreme Fear":  "Medo Extremo",
  "Fear":          "Medo",
  "Neutral":       "Neutro",
  "Greed":         "Ganância",
  "Extreme Greed": "Ganância Extrema",
};

const FEAR_GREED_ES: Record<string, string> = {
  "Extreme Fear":  "Miedo Extremo",
  "Fear":          "Miedo",
  "Neutral":       "Neutral",
  "Greed":         "Codicia",
  "Extreme Greed": "Codicia Extrema",
};

export function translateFearGreed(classification: string, locale: Locale): string {
  if (locale === "pt") return FEAR_GREED_PT[classification] ?? classification;
  if (locale === "es") return FEAR_GREED_ES[classification] ?? classification;
  return classification;
}
