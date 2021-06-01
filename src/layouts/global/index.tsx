import styled from "styled-components";

import GlobalHeader from "./header";
import GlobalFooter from "./footer";
import { LayoutProps } from "..";

export default function GlobalLayout({ children }: LayoutProps) {
  return (
    <>
      <GlobalHeader />
      <Background>
        <Wrapper>{children}</Wrapper>
      </Background>
      <GlobalFooter />
    </>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  padding: 8rem 2rem 0 2rem;
`;
