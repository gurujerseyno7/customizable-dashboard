import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { BarChartProps } from "./types/barChartTypes";

const BarChartLayout = ({ width, height, data }: BarChartProps) => {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{ left: 10, right: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
      <XAxis dataKey="field" />
      <YAxis dataKey="value" mirror />
      <Bar dataKey="value" fill="#82ca9d" isAnimationActive={false} />
    </BarChart>
  );
};

export default BarChartLayout;
