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
import { UserMetricsList } from "lib/types/userMetrics.types";
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
  data: UserMetricsList;
};
const BarChart = ({ data }: PieChartProps) => {
  return (
    <Box>
      {data && (
        <Bar
          data={{
            labels: data.map((item) => item.user),
            datasets: [
              {
                label: "Logins",
                data: data.map((item) => item.logins),
                backgroundColor: "#005aaf",
              },
              {
                label: "Actions",
                data: data.map((item) => item.actions),
                backgroundColor: "#42a4ff",
              },
            ],
          }}
          options={{
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
                  text: "Users",
                },
                grid: {
                  display: false, // Remove grid lines for x-axis
                },
              },
              y: {
                title: {
                  display: false,
                  text: "Count",
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
