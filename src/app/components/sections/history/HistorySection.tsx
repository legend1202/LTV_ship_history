'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';

const SectionWrapper = styled.div`
  // min-height: 80vh;
  margin-bottom: 70px;
`;
const HeadingWrapper = styled.div`
  margin: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  h3 {
    font-family: Sinkin Sans;
    font-size: 48px;
    font-weight: 500;
    line-height: 74px;
    letter-spacing: 0em;
    text-align: justified;
    padding-right: 96px;
  }
  .history_ship1{
    display: none;
    margin-right: 12px;
  }
  .history_ship2{
    display: inline-block;
  }
  @media (max-width: 321px) {
    justify-content: start;
    margin: 0px;
    h3{
        font-family: Sinkin Sans;
        font-size: 32px;
        font-weight: 500;
        line-height: 50px;
        letter-spacing: 0em;
        margin-left: -5px;
    }
    .history_ship2{
        display: none;
    }
    .history_ship1{
        display: inline-block;
    }
  }
`;
const Timeline = styled.section`
  .main-timeline{ position: relative; }
  .main-timeline:before,
  .main-timeline:after{
      content: "";
      display: block;
      width: 100%;
      clear: both;
  }
  .main-timeline:before{
      content: "";
      width: 3px;
      height: 95%;
      background: #bababa;
      position: absolute;
      top: -12%;
      left: 50%;
  }
  .main-timeline .timeline{
      width: 50%;
      float: left;
      position: relative;
      z-index: 1;
  }
  .main-timeline .timeline:before,
  .main-timeline .timeline:after{
      content: "";
      display: block;
      width: 100%;
      clear: both;
  }
  .main-timeline .timeline:last-child:before{
      top: auto;
      bottom: 0;
  }
  .main-timeline .timeline:last-child:nth-child(even):before{
      right: auto;
      left: -12px;
      bottom: -2px;
  }
  .main-timeline .timeline-content{
      text-align: center;
      margin-top: 8px;
      position: relative;
      transition: all 0.3s ease 0s;
  }
  .main-timeline .timeline-content:before{
      content: "";
      width: 96px;
      height: 1px;
      background: rgba(211,207,205,1);
      position: absolute;
      top: 88px;
      left: 645px;
      z-index: -1;
  }
  .main-timeline .circle{
      float: left;
      margin-right: 25px;
      position: relative;
      h3{
        position: absolute; 
        top: -60px;
        left:12px;
        font-family: Sinkin Sans;
        font-size: 48px;
        font-weight: 500;
        line-height: 74px;
        letter-spacing: 0em;
        text-align: left;
        color:white;
      }
      p{
        padding: 0 16px;
        width: 326px;
        height: 247px;
        font-family: Sinkin Sans;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.1em;
        text-align: justify;
        color: #FFF;
      }
  }
  .main-timeline .circle span{
      display: flex;
      width: 100%;
      height: 100%;
      color: #454344;
  }
  .main-timeline .content{
      display: table;
      padding-right: 40px;
      position: relative;
  }
  .main-timeline .icon{
      position: absolute;
      top: 74px;
      right: -116px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content:before{
        left: -66px;
   }
  .main-timeline .timeline:nth-child(2n) .timeline-content,
  .main-timeline .timeline:nth-child(2n) .circle{
      float: right;
  }
  .main-timeline .timeline:nth-child(2n) .circle{
      margin: 0 0 0 25px;
  }
  .main-timeline .timeline:nth-child(2n) .icon{
      right: auto;
      left: -112px;
  }
  .main-timeline .timeline:nth-child(2){
      margin-top: 180px;
  }
  .main-timeline .timeline:nth-child(odd){
      margin: -175px 0 0 0;
  }
  .main-timeline .timeline:nth-child(even){
      margin-bottom: 180px;
  }
  .main-timeline .timeline:first-child,
  .main-timeline .timeline:last-child:nth-child(even){
      margin: 0;
  }
  @media only screen and (min-width: 1601px){
    .main-timeline .icon{
        right: -124px;
    }
    .main-timeline .timeline:nth-child(2n) .icon{
        left: -120px;
    }
  }
  @media only screen and (max-width: 990px){
    .main-timeline:before{ left: 100%; }
    .main-timeline .timeline{
        width: 100%;
        float: none;
        margin-bottom: 20px !important;
    }
    .main-timeline .timeline:first-child:before,
    .main-timeline .timeline:last-child:before{
        left: auto !important;
        right: -13px !important;
    }
    .main-timeline .timeline:nth-child(2n) .circle{
        float: left;
        margin: 0 25px 0 0;
    }
    .main-timeline .timeline:nth-child(2n) .circle:before{
        right: -33px;
        left: auto;
        box-shadow: 7px 0 9px -7px #444 inset;
    }
    .main-timeline .timeline:nth-child(2n) .circle span:before,
    .main-timeline .timeline:nth-child(2n) .circle span:after{
        right: -33px;
        left: auto;
        border-radius: 0 0 0 21px;
    }
    .main-timeline .timeline:nth-child(2n) .circle span:after{
        border-radius: 21px 0 0 0;
    }
    .main-timeline .timeline:nth-child(2n) .content{
        padding: 0 40px 0 0;
        margin-left: 0;
    }
    .main-timeline .timeline:nth-child(2n) .icon{
        right: -14px;
        left: auto;
    }
    .main-timeline .timeline:nth-child(2n) .icon:before,
    .main-timeline .timeline:nth-child(2n) .icon span:before,
    .main-timeline .timeline:nth-child(2n) .icon span:after{
        left: -15px;
        right: auto;
    }
    .main-timeline .timeline:nth-child(2n) .icon span:before{
        border-radius: 0 0 21px 0;
    }
    .main-timeline .timeline:nth-child(2n) .icon span:after{
        border-radius: 0 21px 0 0;
    }
    .main-timeline .timeline:nth-child(2),
    .main-timeline .timeline:nth-child(odd),
    .main-timeline .timeline:nth-child(even){
        margin: 0;
    }
}
@media only screen and (max-width: 480px){
    .main-timeline:before{ left: 0; }
    .main-timeline .timeline:first-child:before,
    .main-timeline .timeline:last-child:before{
        left: -12px !important;
        right: auto !important;
    }
    .main-timeline .circle,
    .main-timeline .timeline:nth-child(2n) .circle{

        float: none;
        margin: 0 auto;
    }
    .main-timeline .timeline-content:before{
        width: 99.5%;
        // top: 68px;
        left: 0.5%;
    }
    .main-timeline .circle span{
        line-height: 115px;
        font-size: 60px;
    }
    .main-timeline .circle:before,
    .main-timeline .circle span:before,
    .main-timeline .circle span:after,
    .main-timeline .icon{
        display: none;
    }
    .main-timeline .content,
    .main-timeline .timeline:nth-child(2n) .content{
        padding: 0 10px;
    }
    .main-timeline .year{
        margin-bottom: 15px;
    }
    .main-timeline .description{
        text-align: center;
    }
}

  @media (max-width: 321px) {
    .main-timeline:before {
        height: 77%;
        top: -1%;
    }
    .his-images{
        width: 238px;
        height: 172px;
        margin-left: 42px;        
    }
    .main-timeline .circle{
        position: relative;
        h3{
          position: absolute; 
          top: -60px;
          left:12px;
          font-family: Sinkin Sans;
          font-size: 48px;
          font-weight: 500;
          line-height: 74px;
          letter-spacing: 0em;
          text-align: left;
          color:white;
        }
        p{
            width: 238px;
            height: 346px;
          font-size: 16px;
          line-height: 25px;
          text-align: left;
          margin-left:42px;
          padding:0;
        }
    }
    .main-timeline .circle span{
        display: block;
    }
    .main-timeline .timeline:nth-child(2n) .circle{
        float: none;
        margin: 0 auto;
        h3{
            top: -60px;
            left: 176px;
        }
        p{
            width: 238px;
            height: auto;
            margin-bottom: 24px;
        }
    }
    .main-timeline .timeline-content:before{
        width: 13%;
    }
    .main-timeline .timeline:nth-child(2n) .timeline-content:before {
        top: -19px;
        left: 14px;
        width: 56%;
    }
    .main-timeline .icon {
        display: inline;
        position: absolute;
        top: 20px;
        right: 265px;
    }
    .main-timeline .timeline:nth-child(2n) .icon {
        right: 265px;
        top: -86px;
    }
  }
`;

export default function HistorySection() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>
            <Image src="/images/history.png" width={38} height={36} alt="logo" className='history_ship1'/>
            2023 <Image src="/images/history.png" width={69} height={64} alt="logo" className='history_ship2' />
          </h3>
        </HeadingWrapper>
        <Timeline>
          <div className="container py-5">
              <div className="row">
                  <div className="col-md-12">
                      <div className="main-timeline">
                          <div className="timeline">
                              <div className="timeline-content">
                                  <div className="circle"><span className="homebox">
                                    <Image src="/images/history1.png" width={324} height={242} alt="logo" className='his-images' />
                                    <p>In the Soviet period the Yard was the largest repair base of Navy fleet at the Baltic Sea. Various naval vessels, service vessels and submarines have been under repair in Yard’s docks or re-equipped at berths. About 5 thousand of workers have been engaged in the Yard’s workshops and repaired objects.</p>
                                  </span>
                                    <div className="icon"><span><Image src="/images/Vector1.png" width={25} height={25.83} alt="logo" /></span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-content">
                                  <div className="circle"><span className="homebox">
                                    <h3>1936</h3>
                                    <p>In the beginning of the last century in the Yard’s workshops the new kind of occupation was developed - repair and recondition of air planes. In 1936 a whole line of planes was produced for a new air squadron of Aizsargs (Latvian paramilitary organization).</p>
                                    <Image src="/images/history2.png" width={324} height={192} alt="logo" className='left-history-img his-images' />
                                  </span>
                                    <div className="icon"><span><Image src="/images/Vector1.png" width={25} height={25.83} alt="logo" /></span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-content">
                                  <div className="circle"><span className="homebox">
                                    <Image src="/images/history3.png" width={324} height={242} alt="logo" className='his-images' />
                                    <p>In the Soviet period the Yard was the largest repair base of Navy fleet at the Baltic Sea. Various naval vessels, service vessels and submarines have been under repair in Yard’s docks or re-equipped at berths. About 5 thousand of workers have been engaged in the Yard’s workshops and repaired objects.</p>
                                  </span>
                                    <div className="icon"><span><Image src="/images/Vector1.png" width={25} height={25.83} alt="logo" /></span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-content">
                                  <div className="circle"><span className="homebox">
                                    <h3>1900</h3>
                                    <p>In the beginning of the last century in the Yard’s workshops the new kind of occupation was developed - repair and recondition of air planes. In 1936 a whole line of planes was produced for a new air squadron of Aizsargs (Latvian paramilitary organization).</p>
                                    <Image src="/images/history4.png" width={324} height={192} alt="logo" className='left-history-img his-images' />
                                  </span>
                                    <div className="icon"><span><Image src="/images/Vector1.png" width={25} height={25.83} alt="logo" /></span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </Timeline>
      </ContainerLayout>
    </SectionWrapper>
  )
}
