import { Card } from "../../atoms/Card/Card";
import { Text } from "../../atoms/Text/Text";
import { Title } from "../../atoms/Title/Title";
import IndicatorChart from "./Chart/IndicatorChart";
import ComplaintChart from "./Chart/ComplaintChart";
import SatisfactionChart from "./Chart/SatisfactionChart";
import PerformanceChart from "./Chart/PerformanceChart";
import moment from "moment";

import PropTypes from "prop-types";

const propTypes = {
  target: PropTypes.number,
  title: PropTypes.string,
};

const defaultProps = {
  target: 75,
};

export const DashboardChart = ({
  chartData,
  className,
  title,
  description,
  moduleName,
  year,
  legends = [],
}) => {
  return (
    <Card className={className}>
      <Title level={5}>{title}</Title>
      <p
        className="ant-typography"
        style={{ marginBottom: "7px", fontStyle: "italic" }}
      >
        Tahun Mutu {year ?? moment().format("YYYY")}
      </p>
      <Text style={{ color: "grey" }}>{description}</Text>
      {moduleName === "indicator" && <IndicatorChart chartData={chartData} />}
      {moduleName === "performance" && (
        <PerformanceChart chartData={chartData} />
      )}
      {moduleName === "complaint" && <ComplaintChart chartData={chartData} />}
      {moduleName === "satisfaction" && (
        <SatisfactionChart chartData={chartData} legends={legends} />
      )}
    </Card>
  );
};

DashboardChart.propTypes = propTypes;
DashboardChart.defaultProps = defaultProps;
