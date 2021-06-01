import styled from "styled-components";

import { GREY } from "src/constants/colors";
import EmailForm from "./email-form";

export default function Main() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>너무 많고 복잡한</Title>
        <Title>분양 정보는 이제 그만!</Title>
        <SubTitle>홈써치를 통해 나에게 꼭 필요한 정보만 받아보세요</SubTitle>
        <EmailForm />
      </ContentWrapper>
      <ImageWrapper>
        <Img src="assets/images/man-with-flag.png" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28rem;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Title = styled.p`
  font-size: 3.6rem;
  font-weight: bold;
  letter-spacing: -0.3rem;
  line-height: 120%;
`;

const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: -0.25rem;
  color: ${GREY[600]};
  margin: 0.8rem 0 2rem 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const Img = styled.img`
  width: 30rem;
  position: absolute;
  top: -5rem;
  right: 0;
`;
