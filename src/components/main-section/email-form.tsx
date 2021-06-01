import styled from "styled-components";

import { WHITE, GREEN, GREY } from "src/constants/colors";

export default function EmailForm() {
  return (
    <>
      <Form>
        <Input type="email" placeholder="이메일을 입력해주세요" required />
        <Button type="submit">신청</Button>
      </Form>
      <Text>
        신청 시, 토드홈 구독 신청과 개인정보 수집에 동의하는 것으로 간주합니다
      </Text>
    </>
  );
}

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 24rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.8rem;
  background-color: ${GREY[100]};
  border: 1px solid ${GREY[500]};
  border-radius: 0.4rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  margin-left: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${WHITE};
  background-color: ${GREEN};
  border: none;
  border-radius: 0.4rem;
`;

const Text = styled.p`
  padding: 0.2rem;
  font-size: 1rem;
  color: ${GREY[500]};
  line-height: 200%;
`;
