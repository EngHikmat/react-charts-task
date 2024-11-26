import { Text, VStack } from "@chakra-ui/react";
import Loader from "components/loader";
import Rbox from "components/r-box";
import BarChart from "components/salesData/bar-chart";
import LineChart from "components/salesData/line-chart";
import PieChart from "components/salesData/pie-chart";
import { Alert } from "components/ui/alert";

import { useGetSalesData } from "services/hooks/SalesData";

const SalesDataPage = () => {
  const { data, isLoading, isError, error } = useGetSalesData();

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
    <VStack gap="16px" align="stretch">
      <Rbox title="Products and Sales Representation Pie Chart" isBorder>
        {renderChart(PieChart)}
      </Rbox>
      <Rbox
        title="Regions and Sales Representation Horizantal-Bar Chart"
        isBorder
      >
        {renderChart(BarChart)}
      </Rbox>
      <Rbox title="Date and Sales Representation Line Chart" isBorder>
        {renderChart(LineChart)}
      </Rbox>
    </VStack>
  );
};

export default SalesDataPage;
