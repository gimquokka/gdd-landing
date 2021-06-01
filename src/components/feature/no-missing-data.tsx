import styled from "styled-components";
import TextContent from "./text-content";

export default function NoMissingData() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img src="assets/images/puzzle.png" />
      </ImageWrapper>
      <TextContent
        title="빠짐없는 분양 정보 제공"
        subtitle={["어쩌면 내 집이 될 분양 정보들을 빠짐없이 제공받아 보세요!"]}
      />
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
`;

const Img = styled.img`
  width: 90%;
  height: fit-content;
`;
