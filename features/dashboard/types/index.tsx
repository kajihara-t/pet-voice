export interface StatsCardProps {
    title: string;
    value: string;
    subtitle?: string;
    trend?: {
      value: number;
      isPositive: boolean;
    };
  }