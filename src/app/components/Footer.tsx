'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import ContainerLayout from './layouts/ContainerLayout';
import EmailIcon from './icons/EmailIcon';

const menuLinks = [
  {
    title: 'About us',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'History',
    href: '/history',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
];

const StyledFooter = styled.footer`
  padding: 0 40px;
  min-height: 270px;
  background-color: #071420;
  @media (max-width: 321px) {
    padding: 0 20px;
    min-height:auto;
  }
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  padding: 40px 0 40px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 321px) {
    display: block;
  }
`;
const LogoWrapper = styled.div`
  display:inline-block;
  .footer-logo{
    width:106px;
    height: 100px;
  }
  @media (max-width: 321px) {
    .footer-logo{
      width: 60px;
      height: 58px;
    }
  }
`;
const Navbar = styled.nav`
  @media (max-width: 321px) {
    display:inline-block;
    width: 178px;
    margin-left:40px;
  }
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 321px) {
    display:block;
  }
`;
const NavItem = styled.li`
margin-bottom: 30px;
text-transform: uppercase;
&:last-of-type {
  margin-bottom: 0;
}
@media (max-width: 321px) {
  display:inline-block;
  padding: 0 6px;
}
`;
const ContactList = styled.ul``;
const ContactItem = styled.li`
  margin-bottom: 35px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 20px;
  }
  @media (max-width: 321px) {
    margin-bottom: 15px;
    h4 {
      margin-bottom: 5px;
    }
  }
`;
const CopyrightBlock = styled.div`
 
`;
const CertificationWrapper = styled.div`
  margin-bottom: 38px;
  @media (max-width: 321px) {
    margin-left: -10px;
    margin: 12px 0;
    padding: 0;
  }
`;
const EmailBlock = styled.div`
display: flex;
p {
  margin-left: 5px;
}
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <LogoWrapper>
          <Image src="/images/logo.png" width={106} height={100} alt="logo" className='footer-logo' />
        </LogoWrapper>
        <Navbar>
          <NavList>
            {menuLinks.map((item) => (
              <NavItem key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </NavItem>
            ))}
          </NavList>
        </Navbar>
        <ContactList>
          <ContactItem>
            <h4>SHIPREPAIR AND CONVERSION</h4>
            <EmailBlock>
              <EmailIcon />
              <p>office@lzk.lv</p>
            </EmailBlock>
          </ContactItem>
          <ContactItem>
            <h4>SHIP AGENT ALVINA Ship Agency Ltd.</h4>
            <EmailBlock>
              <EmailIcon />
              <p>alvinaship@gmail.com</p>
            </EmailBlock>
          </ContactItem>
        </ContactList>
        <CopyrightBlock>
          <CertificationWrapper>
            <Image
              src="/images/logo2.png"
              width={225}
              height={98}
              alt="certification"
            />
          </CertificationWrapper>
          <p>©2023 Liepaja Northern Shipyard</p>
        </CopyrightBlock>
      </StyledContainer>
    </StyledFooter>
  );
}
