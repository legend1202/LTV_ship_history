'use client';
import styled from 'styled-components';
import ContainerLayout from '../../layouts/ContainerLayout';

const StyledSection = styled.section`
  height: 70vh;
  margin-bottom: 60px;
`;

const StyledBackground = styled.div<{ $url: string }>`
  background: ${({ $url }) => `url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

const StyledContainer = styled(ContainerLayout)`
  height: 100%;
`;

export default function LocationSection() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledBackground $url="/images/mapBig.png" />
      </StyledContainer>
    </StyledSection>
  );
}
