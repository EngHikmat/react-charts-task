import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Box } from "@chakra-ui/react";
import { SalesDataList } from "lib/types/salesData.types";

ChartJS.register(...registerables);

type PieChartProps = {
  data: SalesDataList;
};
const LineChart = ({ data }: PieChartProps) => {
  return (
    <Box>
      {data && (
        <Line
          data={{
            labels: data.map((item) => {
              const date = new Date(item.date);
              return `${
                date.getMonth() + 1
              }/${date.getDate()}/${date.getFullYear()}`;
            }),
            datasets: [
              {
                label: "Date",
                data: data.map((item) => item.sales),
                fill: true,
                borderColor: "#005aaf",
                backgroundColor: "#005aaf66",
                tension: 0.4,
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
                  text: "Date",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                },
                grid: {
                  display: false,
                },
              },
              y: {
                title: {
                  display: false,
                  text: "Sales",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                },
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default LineChart;
