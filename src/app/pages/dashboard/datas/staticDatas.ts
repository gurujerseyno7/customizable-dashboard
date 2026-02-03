import LineChartLayout from "../../../../layouts/line-chart/LineChart";
import BarChartLayout from "../../../../layouts/bar-chart/BarChart";
import PieChartLayout from "../../../../layouts/pie-chart/PieChart";
import type { ChartCategoriesData } from "../types/dashboardTypes";

//list of chart  categories
const chartCategory = [
  {
    name: "Token Usage Over Time",
    id: "token",
    active: false,
  },
  {
    name: "Latency Distribution",
    id: "latency",
    active: false,
  },
  {
    name: "Cost Analysis",
    id: "cost",
    active: false,
  },
];

//data for chart categories
const dashboardData: ChartCategoriesData[] = [
  {
    id: "token",
    type: "line",
    title: "Token Usage Over Time",
    Chart: LineChartLayout,
    data: [],
    menuOptions: [],
    selected: false,
  },
  {
    id: "latency",
    type: "pie",
    title: "Latency Distribution",
    Chart: PieChartLayout,
    data: [],
    menuOptions: [],
    selected: false,
  },
  {
    id: "cost",
    type: "bar",
    title: "Cost Analysis",
    Chart: BarChartLayout,
    menuOptions: ["pie", "bar"],
    data: [],
    selected: false,
  },
];

export { chartCategory, dashboardData };
