import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { UserMetricsList } from "lib/types/userMetrics.types";
import { Box } from "@chakra-ui/react";

// Register the required chart components
ChartJS.register(...registerables);

type PieChartProps = {
  data: UserMetricsList;
};
const LineChart = ({ data }: PieChartProps) => {
  return (
    <Box>
      {data && (
        <Line
          data={{
            labels: data.map((item) => item.user),
            datasets: [
              {
                label: "Logins",
                data: data.map((item) => item.logins),
                fill: true,
                borderColor: "#005aaf",
                backgroundColor: "#005aaf66",
                tension: 0.4,
              },
              {
                label: "Actions",
                data: data.map((item) => item.actions),
                fill: true,
                borderColor: "#42a4ff",
                backgroundColor: "#42a4ff66",
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
                  text: "Users",
                },
                grid: {
                  display: false,
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

export default LineChart;
