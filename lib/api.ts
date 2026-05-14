export interface CBBIData {
  score: number;
  metrics: {
    PiCycleTop: number;
    RUPL: number;
    PuellMultiple: number;
    StockToFlow: number;
    TwoYearMAMultiplier: number;
    TrololoTrendLine: number;
    MVRVZScore: number;
    ReserveRisk: number;
    WoobullTops: number;
  };
}

export interface FearGreedData {
  value: number;
  classification: string;
}

export interface MarketData {
  cbbi: CBBIData;
  btcPrice: number;
  fearGreed: FearGreedData;
}

export interface ScoreState {
  label: string;
  description: string;
  range: [number, number];
}

export const SCORE_STATES: ScoreState[] = [
  { label: "STACK",         description: "Historically, scores this low have been strong accumulation opportunities.", range: [0,  20]  },
  { label: "ACCUMULATE",    description: "Low score range. Historically associated with favorable entry points.",       range: [20, 40]  },
  { label: "HODL",          description: "Mid-range, no strong signal. Hold your position and keep a close eye on the score.", range: [40, 60]  },
  { label: "BULL MOMENTUM", description: "Score is rising. Historically associated with increasing market heat.",      range: [60, 80]  },
  { label: "PEAK ZONE",     description: "High score range. Historically associated with cycle tops. Proceed with awareness.", range: [80, 101] },
];

export function getScoreState(score: number): ScoreState {
  return (
    SCORE_STATES.find((s) => score >= s.range[0] && score < s.range[1])
    ?? SCORE_STATES[SCORE_STATES.length - 1]
  );
}

async function fetchCBBI(): Promise<CBBIData> {
  const url = process.env.CBBI_URL ?? "https://colintalkscrypto.com/cbbi/data/latest.json";
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("CBBI fetch failed");
  const json = await res.json();

  // The CBBI API returns an object where each key is a metric name
  // and each value is an object of { date: value } entries.
  // The "Confidence" key is the composite score.
  const getLatest = (obj: Record<string, number>) => {
    const dates = Object.keys(obj).sort();
    return obj[dates[dates.length - 1]] ?? 0;
  };

  const confidence = json.Confidence ? getLatest(json.Confidence) : 0;

  return {
    score: Math.round(confidence * 100),
    metrics: {
      PiCycleTop: json.PiCycleTop ? Math.round(getLatest(json.PiCycleTop) * 100) : 0,
      RUPL: json.RUPL ? Math.round(getLatest(json.RUPL) * 100) : 0,
      PuellMultiple: json.PuellMultiple ? Math.round(getLatest(json.PuellMultiple) * 100) : 0,
      StockToFlow: json.StockToFlow ? Math.round(getLatest(json.StockToFlow) * 100) : 0,
      TwoYearMAMultiplier: json["2YearMAMultiplier"] ? Math.round(getLatest(json["2YearMAMultiplier"]) * 100) : 0,
      TrololoTrendLine: json.Trolololo ? Math.round(getLatest(json.Trolololo) * 100) : 0,
      MVRVZScore: json.MVRVZScore ? Math.round(getLatest(json.MVRVZScore) * 100) : 0,
      ReserveRisk: json.ReserveRisk ? Math.round(getLatest(json.ReserveRisk) * 100) : 0,
      WoobullTops: json.WoobullTops ? Math.round(getLatest(json.WoobullTops) * 100) : 0,
    },
  };
}

async function fetchBTCPrice(): Promise<number> {
  const apiKey = process.env.COINMARKETCAP_API_KEY ?? "";
  const res = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1&convert=USD",
    {
      headers: { "X-CMC_PRO_API_KEY": apiKey },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error("CoinMarketCap fetch failed");
  const json = await res.json();
  return json.data?.["1"]?.quote?.USD?.price ?? 0;
}

async function fetchFearGreed(): Promise<FearGreedData> {
  const res = await fetch("https://api.alternative.me/fng/", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Fear & Greed fetch failed");
  const json = await res.json();
  const entry = json.data?.[0];
  return {
    value: Number(entry?.value ?? 50),
    classification: entry?.value_classification ?? "Neutral",
  };
}

export async function fetchMarketData(): Promise<MarketData> {
  const [cbbi, btcPrice, fearGreed] = await Promise.allSettled([
    fetchCBBI(),
    fetchBTCPrice(),
    fetchFearGreed(),
  ]);

  return {
    cbbi:
      cbbi.status === "fulfilled"
        ? cbbi.value
        : { score: 0, metrics: { PiCycleTop: 0, RUPL: 0, PuellMultiple: 0, StockToFlow: 0, TwoYearMAMultiplier: 0, TrololoTrendLine: 0, MVRVZScore: 0, ReserveRisk: 0, WoobullTops: 0 } },
    btcPrice: btcPrice.status === "fulfilled" ? btcPrice.value : 0,
    fearGreed:
      fearGreed.status === "fulfilled"
        ? fearGreed.value
        : { value: 50, classification: "Neutral" },
  };
}
