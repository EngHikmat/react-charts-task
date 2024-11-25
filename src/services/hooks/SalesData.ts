import APIClient from "services/api";
import { useQuery } from "@tanstack/react-query";
import { SalesData } from "lib/types/salesData.types";

export const useGetUserMetrics = () => {
  const api = new APIClient<SalesData>(`api/sales-data`);
  return useQuery({
    queryKey: ["SalesData"],
    queryFn: () => api.getList(),
  });
};
