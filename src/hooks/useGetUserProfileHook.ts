import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";

import { type UseMutationResult } from "@tanstack/react-query";

export const useGetUserProfileHook = (): UseMutationResult<
  any,
  Error,
  void,
  unknown
> => {
  return useMutation({
    mutationFn: async () => {
      try {
        const res = await api.get(`/auth/user/profile`);
        return res.data;
      } catch (e: any) {
        console.log(e);
      }
    },
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
      return data;
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
};
