import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ chartData }) => {
  const getBarColor = (value) => {
    if (value > 80) {
      return "#5F5DC8";
    } else if (value > 40) {
      return "#C8BD5D";
    } else {
      return "#C85D5D";
    }
  };

  return (
    <div style={{ width: "100%", height: 250, marginTop: 10 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            type={"number"}
            domain={[0, 100]}
          />
          <Tooltip />
          <Bar
            radius={[10, 10, 0, 0]}
            dataKey="average"
            label={"Capaian Kinerja"}
            fill="#82ca9d"
            style={{ borderRadius: "10px" }}
          >
            {chartData &&
              chartData.map((item, index) => (
                <Cell fill={getBarColor(item.average)} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
