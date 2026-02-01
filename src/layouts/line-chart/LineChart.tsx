import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import type { LineChartProps } from "./types/lineChartTypes";

const LineChartLayout = ({ width, height, data }: LineChartProps) => {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{ left: 10, right: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
      <XAxis dataKey="field" />
      <YAxis dataKey="value" mirror />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#82ca9d"
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  );
};

export default LineChartLayout;
