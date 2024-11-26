import { Box } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  BarElement,
  LogarithmicScale,
} from "chart.js";
import { SalesDataList } from "lib/types/salesData.types";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  BarElement,
  LogarithmicScale
);

type PieChartProps = {
  data: SalesDataList;
};
const BarChart = ({ data }: PieChartProps) => {
  return (
    <Box>
      {data && (
        <Bar
          data={{
            labels: data.map((item) => item.region),
            datasets: [
              {
                label: "sales",
                data: data.map((item) => item.sales),
                backgroundColor: "#005aaf",
              },
            ],
          }}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  pointStyleWidth: 10,
                  boxHeight: 7,
                  boxWidth: 9,
                  padding: 14,
                  color: "black",
                  usePointStyle: true,
                  pointStyle: "rectRounded",
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Sales",
                },
                grid: {
                  display: false, // Remove grid lines for x-axis
                },
              },
              y: {
                title: {
                  display: false,
                  text: "Region",
                },
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default BarChart;
