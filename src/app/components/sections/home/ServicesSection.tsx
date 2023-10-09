'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../layouts/ContainerLayout';

const StyledSection = styled.section`
  min-height: 80vh;
`;
const SectionBackground = styled.div<{ $url: string }>`
  background: ${({ $url }) =>
    `linear-gradient(0deg, rgba(17,48,77, 1) 0%, rgba(0,0,0,0) 50%, rgba(17,48,77,1) 100%), url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
`;
const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;
const ImageWrapper = styled.div`
  position: relative;
  margin-right: 50px;
  &:last-of-type {
    margin-right: 0;
  }
`;
const StyledHeading = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  &::after {
    content: '';
    background-color: #fff;
    width: 50%;
    height: 1px;
    display: block;
    margin-top: 5px;
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export default function ServicesSection() {
  return (
    <StyledSection>
      <SectionBackground $url="/images/sea.png">
        <ContainerLayout>
          <SectionContent>
            <ImageWrapper>
              <Image
                src="/images/services1.png"
                height={500}
                width={500}
                alt="Our services"
              />
              <StyledHeading>Судоремонт</StyledHeading>
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src="/images/services2.png"
                height={500}
                width={500}
                alt="Our services"
              />
              <StyledHeading>Судоcтроение</StyledHeading>
            </ImageWrapper>
          </SectionContent>
        </ContainerLayout>
      </SectionBackground>
    </StyledSection>
  );
}
