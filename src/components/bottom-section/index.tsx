import styled from "styled-components";
import { Button } from "@chakra-ui/react";

import { GREY, NAVY, WHITE, SKY_BLUE } from "src/constants/colors";

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
      <A href="#">
        <Button
          bg={NAVY}
          _hover={{ bg: SKY_BLUE }}
          color={WHITE}
          size="xl"
          padding="1rem 2rem"
          marginTop="1rem"
          fontSize="1.8rem"
        >
          출시 알림 및 메일링 서비스 신청
        </Button>
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
  margin-bottom: 0.6rem;
`;

const Title = styled.p`
  font-size: 2.6rem;
  color: ${GREY[800]};
  font-weight: 500;
  letter-spacing: -0.2rem;
  line-height: 120%;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Emphasize = styled.p`
  font-size: 2.8rem;
  color: ${NAVY};
  font-weight: bold;
  line-height: 120%;
  margin: 0 0.8rem;
  @media (max-width: 1024px) {
    font-size: 2.1rem;
    margin: 0 0.5rem;
  }
`;

const A = styled.a`
  text-decoration: none;
`;
