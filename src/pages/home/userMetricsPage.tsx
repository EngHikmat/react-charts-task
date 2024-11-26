import { Text, VStack } from "@chakra-ui/react";
import Loader from "components/loader";
import Rbox from "components/r-box";
import { Alert } from "components/ui/alert";
import BarChart from "components/userMetrics/bar-chart";
import LineChart from "components/userMetrics/line-chart";
import { useGetUserMetrics } from "services/hooks/UserMetrics";

const UserMetricsPage = () => {
  const { data, isLoading, isError, error } = useGetUserMetrics();

  const renderChart = (ChartComponent: React.ElementType) => {
    if (isLoading) {
      return <Loader />;
    }

    if (!data) {
      return <Text>No data found</Text>;
    }

    if (isError) {
      return (
        <Alert status="error" title={error?.name}>
          {error?.message}
        </Alert>
      );
    }

    return <ChartComponent data={data} />;
  };

  return (
    <VStack align="stretch" gap="16px">
      <Rbox title="User Metrics Bar Chart" isBorder>
        {renderChart(BarChart)}
      </Rbox>

      <Rbox title="User Metrics Line Chart" isBorder>
        {renderChart(LineChart)}
      </Rbox>
    </VStack>
  );
};

export default UserMetricsPage;
