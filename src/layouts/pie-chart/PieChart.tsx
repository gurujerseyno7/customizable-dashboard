import { Pie, PieChart } from "recharts";
import type { PieChartProps } from "./types/pieChartTypes";

const PieChartLayout = ({ width, height, data,  }: PieChartProps) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="field"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#82ca9d"
        label
        isAnimationActive={false}
      />
    </PieChart>
  );
};

export default PieChartLayout;
