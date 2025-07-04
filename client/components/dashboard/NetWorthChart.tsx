"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getNetWorthData,
  formatCurrency,
  getNetWorthTrend,
  type NetWorthDataPoint,
} from "@/lib/networth-data";

const chartConfig = {
  netWorth: {
    label: "Net Worth",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

interface NetWorthChartProps {
  className?: string;
}

export function NetWorthChart({ className }: NetWorthChartProps) {
  const [timeRange, setTimeRange] = React.useState("12m");

  const data = React.useMemo(() => getNetWorthData(timeRange), [timeRange]);
  const trend = React.useMemo(() => getNetWorthTrend(data), [data]);
  const latestValue = data[data.length - 1]?.netWorth || 0;

  const timeRangeOptions = [
    { value: "30d", label: "30D" },
    { value: "90d", label: "3M" },
    { value: "6m", label: "6M" },
    { value: "12m", label: "1Y" },
  ];

  const getTrendStyles = () => {
    switch (trend.trend) {
      case "up":
        return {
          color: "text-emerald-700",
          bg: "bg-gradient-to-r from-emerald-50/80 to-emerald-100/60",
          border: "border-emerald-200/40",
          icon: "text-emerald-600",
          surface: "bg-gradient-to-br from-emerald-50/60 to-emerald-100/40",
        };
      case "down":
        return {
          color: "text-red-700",
          bg: "bg-gradient-to-r from-red-50/80 to-red-100/60",
          border: "border-red-200/40",
          icon: "text-red-600",
          surface: "bg-gradient-to-br from-red-50/60 to-red-100/40",
        };
      default:
        return {
          color: "text-slate-700",
          bg: "bg-gradient-to-r from-slate-50/80 to-slate-100/60",
          border: "border-slate-200/40",
          icon: "text-slate-600",
          surface: "bg-gradient-to-br from-slate-50/60 to-slate-100/40",
        };
    }
  };

  const trendStyles = getTrendStyles();

  return (
    <Card
      className={`${className} bg-gradient-to-br from-white via-slate-50/30 to-white border-0 shadow-lg shadow-slate-100/50 rounded-3xl overflow-hidden`}
    >
      <CardHeader className="px-4 pt-4 pb-3 space-y-3 sm:px-8 sm:pt-8 sm:pb-6 sm:space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="space-y-1 sm:space-y-2">
            <CardTitle className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              Net Worth Over Time
            </CardTitle>
            <CardDescription className="text-sm text-slate-600 font-medium hidden sm:block">
              Track your financial progress and growth
            </CardDescription>
          </div>

          {/* Trend Indicator - Simplified for mobile */}
          <div
            className={`
            px-2 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border ${trendStyles.border} ${trendStyles.surface}
            shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md
          `}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <div
                className={`${trendStyles.icon} transition-colors duration-300`}
              >
                {trend.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : trend.trend === "down" ? (
                  <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold ${trendStyles.color}`}
              >
                {trend.trend === "up"
                  ? "Growing"
                  : trend.trend === "down"
                  ? "Declining"
                  : "Stable"}
              </span>
            </div>
          </div>
        </div>

        {/* Time Range Selector - Compact for mobile */}
        <div className="flex gap-1 p-0.5 sm:gap-2 sm:p-1 bg-gradient-to-r from-slate-50/80 to-slate-100/60 rounded-xl sm:rounded-2xl border border-slate-200/40">
          {timeRangeOptions.map((option) => (
            <Button
              key={option.value}
              variant={timeRange === option.value ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(option.value)}
              className={`
                h-7 px-2 sm:h-9 sm:px-4 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all duration-300 border-0 flex-1
                ${
                  timeRange === option.value
                    ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-md shadow-slate-900/20 transform hover:scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80 hover:shadow-sm"
                }
              `}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4 space-y-4 sm:px-8 sm:pb-8 sm:space-y-8">
        {/* Summary Stats - Simplified for mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          <div className="p-3 sm:p-6 bg-gradient-to-br from-slate-50/60 to-slate-100/40 rounded-xl sm:rounded-2xl border border-slate-200/40 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
                Current
              </p>
              <p
                className={`text-sm sm:text-2xl font-bold tracking-tight ${
                  latestValue >= 0 ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {formatCurrency(latestValue)}
              </p>
            </div>
          </div>

          <div className="p-3 sm:p-6 bg-gradient-to-br from-slate-50/60 to-slate-100/40 rounded-xl sm:rounded-2xl border border-slate-200/40 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
                Change
              </p>
              <p
                className={`text-sm sm:text-2xl font-bold tracking-tight ${trendStyles.color}`}
              >
                {trend.change >= 0 ? "+" : ""}
                {formatCurrency(trend.change)}
              </p>
            </div>
          </div>

          <div className="p-3 sm:p-6 bg-gradient-to-br from-slate-50/60 to-slate-100/40 rounded-xl sm:rounded-2xl border border-slate-200/40 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
                Percentage
              </p>
              <p
                className={`text-sm sm:text-2xl font-bold tracking-tight ${trendStyles.color}`}
              >
                {trend.percentage >= 0 ? "+" : ""}
                {trend.percentage.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Chart Container - Optimized height for mobile */}
        <div className="p-3 sm:p-6 bg-gradient-to-br from-white via-slate-50/30 to-white rounded-xl sm:rounded-2xl border border-slate-200/40 shadow-sm backdrop-blur-sm">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[200px] sm:h-[320px] w-full"
          >
            <AreaChart data={data}>
              <defs>
                <linearGradient id="fillNetWorth" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-netWorth)"
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-netWorth)"
                    stopOpacity={0.02}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                strokeDasharray="2 4"
                className="stroke-slate-200/60"
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={24}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-GB", {
                    month: "short",
                    day: "numeric",
                  });
                }}
                className="text-xs font-medium text-slate-500"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  if (value >= 0) {
                    return `£${(value / 1000).toFixed(0)}k`;
                  } else {
                    return `-£${(Math.abs(value) / 1000).toFixed(0)}k`;
                  }
                }}
                className="text-xs font-medium text-slate-500"
              />
              <ChartTooltip
                cursor={{ strokeDasharray: "2 4", strokeWidth: 1 }}
                content={
                  <ChartTooltipContent
                    className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-xl sm:rounded-2xl p-3 sm:p-4"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-GB", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                    formatter={(value) => [
                      formatCurrency(value as number),
                      "Net Worth",
                    ]}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="netWorth"
                type="monotone"
                fill="url(#fillNetWorth)"
                stroke="var(--color-netWorth)"
                strokeWidth={2}
                className="drop-shadow-sm"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
