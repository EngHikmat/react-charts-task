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
import { Pie } from "react-chartjs-2";
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
const PieChart = ({ data }: PieChartProps) => {
  const colors = [
    "#F765A3",
    "#81D4FA",
    "#55A7F3",
    "#FF991F",
    "#F7B465",
    "#318973",
    "#313A89",
    "#1870B0",
    "#318973",
    "#36A88B",
    "#CB65F7",
  ];

  return (
    <Box>
      {data && (
        <Pie
          data={{
            labels: data.map((item) => item.product),
            datasets: [
              {
                label: "Sales",
                data: data.map((item) => item.sales),
                backgroundColor: colors,
                borderColor: colors,
              },
            ],
          }}
          height="300px"
          width="300px"
          options={{
            responsive: true,
            maintainAspectRatio: false,
            devicePixelRatio: 3,
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
                display: false,
              },
              y: {
                display: false,
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default PieChart;
