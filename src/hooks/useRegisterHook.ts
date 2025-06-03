import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";

export const useRegisterHook = () => {
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      try {
        const res = await api.post("/auth/register", credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return res.data;
      } catch (error: any) {
        console.log(error);
      }
    },
  });
};
