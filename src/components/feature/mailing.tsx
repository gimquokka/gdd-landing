import styled from "styled-components";
import TextContent from "./text-content";

export default function Mailing() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img src="assets/images/mail.png" />
      </ImageWrapper>
      <TextContent
        title="부동산 소식 메일링"
        subtitle={[
          "정보가 곧 내 집을 마련한다!",
          "핫한 부동산 소식과 알아두면 좋을 꿀팁들을 메일로 받아보세요.",
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  margin-top: 4rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Img = styled.img`
  width: fit-content;
`;
