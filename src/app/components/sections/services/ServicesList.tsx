'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';

const SectionWrapper = styled.div`
  margin-bottom: 20px;
`;
const HeadingWrapper = styled.div`
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    max-width: 70%;
  }
  @media (max-width: 321px) {
    h3 {
      font-family: Sinkin Sans;
      font-size: 20px;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
const CardList = styled.div`
  // width: 1200px;
  // display:flex;
`;
const TriangleLeft = styled.div`
  position: relative;
  background: #0B1F31;
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
    padding: 8px;
  }
  }
  @media (max-width: 321px) {
    width:100%;
    position:relative;
    background: transparent;
    left:-0px;
    div{
      padding: 10px;
    }
  }
`;
const TriangleRight = styled.div`
  position: absolute;
  width: 750px;
  border-bottom: 345px solid #1B3349;
  border-left: 120px solid transparent;
  left: 770px;
  top: -112px;
  div{
    position: absolute;
    top: 114px;
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
    padding: 8px;
  }
  }
  @media (max-width: 321px) {
    position: relative;
    border-bottom: 290px solid #1B3349;
    border-left: 10px solid transparent;
    width:300px;
    left: -10px;
    top:0;
    div{
      top: 0px;
      width:290px;
      P{
        width:290px;
      }
    }
  }
`;


export default function ServicesList() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>
            The company offers the following services:
          </h3>
        </HeadingWrapper>
        <CardList>
          <TriangleLeft>
            <div>
              <p>• Installation of the BWTS</p>
              <p>• Repair of various piping systems, including non-ferrous pipes,<br/> hot and cold galvanized</p>
              <p>• Overhauling, repair of valves</p>
              <p>• Repair of all types of generators and engines</p>
              <p>• Repair of all kind of deck machinery</p>
            </div>
              <TriangleRight>
                <div>
                  <p>• Installation of the BWTS</p>
                  <p>• Repair of various piping systems, including non-ferrous pipes,<br/> &nbsp;&nbsp; hot and cold galvanized</p>
                  <p>• Overhauling, repair of valves</p>
                  <p>• Repair of all types of generators and engines</p>
                  <p>• Repair of all kind of deck machinery</p>
                </div>
              </TriangleRight>
          </TriangleLeft>
        </CardList>
      </ContainerLayout>
    </SectionWrapper>
  );
}
