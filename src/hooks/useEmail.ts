import axios from "axios";
import { useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";

export default function useEmail() {
  const toast = useToast();

  const createMutation = useMutation(
    (email: string) =>
      axios.post("/api/email", {
        fields: {
          Email: email,
        },
      }),
    {
      onSuccess: () => {
        toast({
          title: "성공적으로 신청되었습니다",
          status: "success",
          position: "top",
          duration: 1500,
        });
      },
    }
  );

  return {
    addNewEmail: createMutation.mutate,
  };
}
