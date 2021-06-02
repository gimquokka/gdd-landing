import axios from "axios";
import { useMutation } from "react-query";

export default function useEmail() {
  const createMutation = useMutation(
    (email: string) =>
      axios.post("/api/email", {
        fields: {
          Email: email,
        },
      }),
    {
      onSuccess: () => {
        alert("성공적으로 신청되었습니다");
      },
    }
  );

  return {
    addNewEmail: createMutation.mutate,
  };
}
