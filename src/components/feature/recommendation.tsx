import styled from "styled-components";
import TextContent from "./text-content";

export default function Recommendation() {
  return (
    <Wrapper>
      <TextContent
        title="개인 맞춤 분양 정보 추천"
        subtitle={[
          "예산, 청약 가점, 지역 등 자격정보를 입력하면",
          "똑똑한 AI가 나에게 꼭 맞는 '맞춤 청약 정보'를 추천해드려요.",
        ]}
      />
      <ImageWrapper>
        <Img src="assets/images/dart.png" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const Img = styled.img`
  width: fit-content;
`;
