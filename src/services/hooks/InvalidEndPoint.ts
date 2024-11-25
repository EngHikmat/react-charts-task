import APIClient from "services/api";
import { useQuery } from "@tanstack/react-query";

export const useGetUserMetrics = () => {
  const api = new APIClient(`api/invalid-endpoint`);
  return useQuery({
    queryKey: ["UserMetrics"],
    queryFn: () => api.getList(),
  });
};
