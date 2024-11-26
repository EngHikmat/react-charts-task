import { UserMetricsList } from "lib/types/userMetrics.types";
import APIClient from "services/api";
import { useQuery } from "@tanstack/react-query";

export const useGetUserMetrics = () => {
  const api = new APIClient<UserMetricsList>(`api/user-metrics`);
  return useQuery({
    queryKey: ["UserMetrics"],
    queryFn: () => api.getList(),
  });
};
