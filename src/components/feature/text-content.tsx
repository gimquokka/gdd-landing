import styled from "styled-components";

import { GREY } from "src/constants/colors";

type TextContentProps = {
  title: string;
  subtitle: string[];
};

export default function TextContent({ title, subtitle }: TextContentProps) {
  return (
    <ContentWrapper>
      <Title>{title}</Title>
      {subtitle.map((value, index) => (
        <SubTitle key={index}>{value}</SubTitle>
      ))}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
`;

const Title = styled.p`
  font-size: 3.2em;
  font-weight: bold;
  letter-spacing: -0.1rem;
  line-height: 200%;
`;

const SubTitle = styled.p`
  font-size: 1.8rem;
  letter-spacing: -0.2rem;
  color: ${GREY[600]};
  line-height: 140%;
`;
