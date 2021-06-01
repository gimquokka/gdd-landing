import Link from "next/link";
import styled from "styled-components";

import { WHITE } from "src/constants/colors";

export default function GlobalHeader() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Link href="/">
          <Title>🏡 토드홈</Title>
        </Link>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  height: 6rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
  background-color: ${WHITE};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
`;
