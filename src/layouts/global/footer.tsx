import styled from "styled-components";

import { GREY, LIGHT_GREEN } from "src/constants/colors";

export default function GlobalFooter() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>토드홈</Title>
        <Text>개인 맞춤 분양 정보 추천 서비스</Text>
        <Text>문의: help@toadhome.co</Text>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  z-index: 100;
  display: flex;
  height: 10rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${LIGHT_GREEN};
  @media (max-width: 1024px) {
    height: 14rem;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
`;

const Title = styled.p`
  line-height: 120%;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${GREY[800]};
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: ${GREY[600]};
`;
