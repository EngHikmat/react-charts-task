import APIClient from "services/api";
import { useQuery } from "@tanstack/react-query";
import { SalesDataList } from "lib/types/salesData.types";

export const useGetSalesData = () => {
  const api = new APIClient<SalesDataList>(`api/sales-data`);
  return useQuery({
    queryKey: ["SalesData"],
    queryFn: () => api.getList(),
  });
};
