export interface NetWorthDataPoint {
  date: string;
  netWorth: number;
}

// Mock net worth data spanning 12 months with realistic growth patterns
export const mockNetWorthData: NetWorthDataPoint[] = [
  // 12 months ago
  { date: "2023-12-01", netWorth: -2150 },
  { date: "2023-12-15", netWorth: -2100 },
  { date: "2024-01-01", netWorth: -2050 },
  { date: "2024-01-15", netWorth: -2000 },
  { date: "2024-02-01", netWorth: -1950 },
  { date: "2024-02-15", netWorth: -1900 },
  { date: "2024-03-01", netWorth: -1850 },
  { date: "2024-03-15", netWorth: -1800 },
  { date: "2024-04-01", netWorth: -1750 },
  { date: "2024-04-15", netWorth: -1700 },
  { date: "2024-05-01", netWorth: -1650 },
  { date: "2024-05-15", netWorth: -1600 },
  { date: "2024-06-01", netWorth: -1550 },
  { date: "2024-06-15", netWorth: -1500 },
  { date: "2024-07-01", netWorth: -1450 },
  { date: "2024-07-15", netWorth: -1400 },
  { date: "2024-08-01", netWorth: -1350 },
  { date: "2024-08-15", netWorth: -1300 },
  { date: "2024-09-01", netWorth: -1250 },
  { date: "2024-09-15", netWorth: -1200 },
  { date: "2024-10-01", netWorth: -1150 },
  { date: "2024-10-15", netWorth: -1100 },
  { date: "2024-11-01", netWorth: -1050 },
  { date: "2024-11-15", netWorth: -1000 },
  { date: "2024-12-01", netWorth: -950 },
  { date: "2024-12-15", netWorth: -900 },
  { date: "2024-12-30", netWorth: -850 },
];

export function getNetWorthData(timeRange: string): NetWorthDataPoint[] {
  const referenceDate = new Date("2024-12-30");
  let daysToSubtract = 365; // 12 months default

  if (timeRange === "30d") {
    daysToSubtract = 30;
  } else if (timeRange === "90d") {
    daysToSubtract = 90;
  } else if (timeRange === "6m") {
    daysToSubtract = 180;
  }

  const startDate = new Date(referenceDate);
  startDate.setDate(startDate.getDate() - daysToSubtract);

  return mockNetWorthData.filter((item) => {
    const date = new Date(item.date);
    return date >= startDate;
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}

export function getNetWorthTrend(data: NetWorthDataPoint[]): {
  trend: "up" | "down" | "stable";
  change: number;
  percentage: number;
} {
  if (data.length < 2) {
    return { trend: "stable", change: 0, percentage: 0 };
  }

  const first = data[0].netWorth;
  const last = data[data.length - 1].netWorth;
  const change = last - first;
  const percentage = first !== 0 ? (change / Math.abs(first)) * 100 : 0;

  const trend = change > 0 ? "up" : change < 0 ? "down" : "stable";

  return { trend, change, percentage };
}
