'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';

const SectionWrapper = styled.div`
  // min-height: 80vh;
  margin-bottom: 70px;
  @media (max-width: 321px) {
    margin-bottom: 0px;
    // min-height: auto;
  }
`;
const HeadingWrapper = styled.div`
  margin: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  h3 {
    font-size: 24px;
    max-width: 70%;
    font-family: Sinkin Sans;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
  }
  @media (max-width: 321px) {
    margin: 0;
    h3 {
      max-width: 290px;
      font-family: Sinkin Sans;
      font-size: 32px;
      font-weight: 700;
      line-height: 37px;
      letter-spacing: 0em;
      text-align: center;

    }
  }
`;
const CardList = styled.div`
  // width: 1200px;
  // display:flex;
`;
const TriangleLeft = styled.div`
  position: relative;
  background: #1B3349;
  div{
    padding: 56px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
      font-family: Sinkin Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      padding: 8px 0px;
    }
  }
  @media (max-width: 321px) {
    width:100%;
    position:relative;
    background: transparent;
    left:-0px;
    div{
      display:block;
      padding: 10px;
      margin-top:50px;
    }
  }
`;
const TriangleRight = styled.div`
  position: absolute;
  width: 750px;
  border-top: 345px solid #1B3349;
  border-left: 120px solid transparent;
  left: 770px;
  top: 0px;
  div{
    position: absolute;
    top: -345px;
    left: 0px;
    width: 601px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  p{
    font-family: Sinkin Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin: 24px 8px;
  }
  button {
    background-color: transparent;
    width: 447px;
    padding: 29px 0 30px 0;
    border: 2px solid #fff;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    margin: 16px 8px;
  }
  }
  @media (max-width: 321px) {
    position: relative;
    z-index: -1;
    border-bottom: 290px solid #1B3349;
    border-left: 10px solid transparent;
    width:290px;
    left: -10px;
    top: -366px;
    div{
      top: 0px;
      width:290px;
      P{
        width:290px;
        margin: 24px 0px;
      }
      button {
        width: 260px;
        border: 2px solid #fff;
        font-family: Sinkin Sans;
        font-size: 20px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        margin: 0;
      }
    }
  }
`;

export default function ServicesRequest() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>
            SHIPBUILDING FACILITIES
          </h3>
        </HeadingWrapper>
        <CardList>
          <TriangleLeft>
            <div>
              <h3>Title</h3>
              <p>The company is able to build all kind of hulls from small fishing <br /> trawlers up to cargo vessels using 2 building workshops <br /> for pre-assembling of sections and blocks up to 50 tons.
              </p>
              <p>The final assembly including zinc metalizing, painting and <br />outfitting is performed in the dry-dock. The company builds steel<br /> hulls including hulls with partial out-fitting as well as delivers<br /> turnkey vessels for our Scandinavian and European customers.</p>
            </div>
            <TriangleRight>
              <div>
                <p>If you require any further information we <br/>shall be happy to let you have this, on request.</p>
                <button>CTA</button>
              </div>
            </TriangleRight>
          </TriangleLeft>
        </CardList>
      </ContainerLayout>
    </SectionWrapper>
  )
}
