import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";

export default function useLogoutHook() {
  return useMutation({
    mutationFn: async (refreshToken: string) => {
      try {
        const response = await api.post("/auth/logout", { refreshToken });
        return response;
      } catch (error: any) {
        console.log(error);
      }
    },
  });
}
