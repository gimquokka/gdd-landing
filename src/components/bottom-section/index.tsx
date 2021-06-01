import styled from "styled-components";

import { GREEN, GREY, NAVY, WHITE } from "src/constants/colors";

export default function Bottom() {
  return (
    <Wrapper>
      <Line>
        <Title>개인 맞춤 분양 정보 추천 앱,</Title>
        <Emphasize>토드홈 출시 알림을</Emphasize>
        <Title>보내드립니다</Title>
      </Line>
      <Line>
        <Title>앱 출시 전까지</Title>
        <Emphasize>토드홈을 통해 부동산 정보를</Emphasize>
        <Title>메일로 받아보세요</Title>
      </Line>
      <A href="/">
        <Button>출시 알림 및 메일링 서비스 신청</Button>
      </A>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24rem;
`;

const Line = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.p`
  font-size: 2.6rem;
  color: ${GREY[800]};
  font-weight: 500;
  letter-spacing: -0.2rem;
  line-height: 120%;
`;

const Emphasize = styled.p`
  font-size: 2.8rem;
  color: ${NAVY};
  font-weight: bold;
  line-height: 120%;
  margin: 0 0.8rem;
`;

const A = styled.a`
  text-decoration: none;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 2rem;
  margin-left: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${WHITE};
  background-color: ${NAVY};
  border: none;
  border-radius: 0.4rem;
`;
