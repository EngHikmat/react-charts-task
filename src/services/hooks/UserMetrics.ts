import { UserMetrics } from "lib/types/userMetrics.types";
import APIClient from "services/api";
import { useQuery } from "@tanstack/react-query";

export const useGetUserMetrics = () => {
  const api = new APIClient<UserMetrics>(`api/user-metrics`);
  return useQuery({
    queryKey: ["UserMetrics"],
    queryFn: () => api.getList(),
  });
};
