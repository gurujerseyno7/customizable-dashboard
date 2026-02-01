import PieChartLayout from "../pie-chart/PieChart";
import LineChartLayout from "../line-chart/LineChart";
import BarChartLayout from "../bar-chart/BarChart";
import CustomMenu from "../../components/custom-menu/CustomMenu";
import type { GridContainerProps } from "./types/gridContainerTypes";

const GridContainer = ({
  data,
  title,
  style,
  className,
  id,
  children,
  type,
  menuOptions,
  onMenuClick,
  ...props
}: GridContainerProps) => {
  const width = Number.parseInt(style.width, 10);
  const height = Number.parseInt(style.height, 10) - 50;

  const ChartTypes = {
    pie: PieChartLayout,
    line: LineChartLayout,
    bar: BarChartLayout,
  };

  const Chart = ChartTypes[type];

  return (
    <div
      style={style}
      key={id}
      className={`${className}flex flex-col bg-[#242424]`}
      {...props}
    >
      <CustomMenu
        title={title}
        menuOptions={menuOptions}
        onMenuClick={onMenuClick}
        type={type}
      />

      <Chart data={data} width={width} height={height} key={id} />
      {children}
    </div>
  );
};

export default GridContainer;
