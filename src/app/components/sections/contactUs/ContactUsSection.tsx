'use client';
import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from '../../layouts/ContainerLayout';
import LocationIcon from '../../icons/LocationIcon';
import EmailIcon from '../../icons/EmailIcon';

const StyledSection = styled.section`
  min-height: 80vh;
  margin-bottom: 120px;
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
`;
const TextBlock = styled.div``;
const StyledSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 50px;
`;
const ImagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImageWrapper = styled.div``;
const FormWrapper = styled.div`
  margin-bottom: 60px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    background-color: transparent;
    border: 1px solid #fff;
    padding: 24px;
    margin-bottom: 20px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  textarea {
    height: 130px;
  }
  button {
    padding: 24px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    text-align: left;
  }
`;
const ContactInfoBlock = styled.div``;
const ContactInfoItem = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    margin-bottom: 15px;
  }
`;
const InfoWithIcon = styled.div`
  display: flex;
  /* margin-bottom: 15px; */
  &:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin-left: 7px;
  }
`;

export default function ContactUs() {
  return (
    <StyledSection>
      <StyledContainer>
        <TextBlock>
          <FormWrapper>
            <StyledSubtitle>Subtitle</StyledSubtitle>
            <StyledForm>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Name" />
              <textarea placeholder="Text" cols={30} rows={10}></textarea>
              <button>Submit</button>
            </StyledForm>
          </FormWrapper>
          <ContactInfoBlock>
            <ContactInfoItem>
              <h4>Liepaja Northen Shipyard Ltd</h4>
              <p>Reg. Nr. LV42103093384</p>
              <InfoWithIcon>
                <LocationIcon />
                <p>44D, Generala Baloza Str. Liepaja, LV-3402, Latvia</p>
              </InfoWithIcon>
              <InfoWithIcon>
                <EmailIcon />
                <p>office@lzk.lv</p>
              </InfoWithIcon>
            </ContactInfoItem>
            <ContactInfoItem>
              <h4>SHIP AGENT ALVINA Ship Agency Ltd</h4>
              <InfoWithIcon>
                <EmailIcon />
                <p>alvinaship@gmail.com</p>
              </InfoWithIcon>
            </ContactInfoItem>
          </ContactInfoBlock>
        </TextBlock>
        <ImagesBlock>
          <ImageWrapper>
            <Image
              src="/images/contact_us_1.png"
              width={630}
              height={345}
              alt="airfoto"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/images/contact_us_2.png"
              width={630}
              height={345}
              alt="airfoto"
            />
          </ImageWrapper>
        </ImagesBlock>
      </StyledContainer>
    </StyledSection>
  );
}
