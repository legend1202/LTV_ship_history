'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import ContainerLayout from './layouts/ContainerLayout';

const StyledHeader = styled.header`
  height: 150px;
  background: linear-gradient(
    61deg,
    rgba(0, 0, 0, 0.7) -75.08%,
    rgba(255, 255, 255, 0) 51.7%
  );
  padding: 25px 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const StyledContainer = styled(ContainerLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  // .logoImage{
  //   display: none;
  // }
  @media (max-width: 321px) {
    .logoImage{
      width: 38px;
      height: 37px;
    }
  }
`;
const Navbar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  color: #fff;
  @media only screen and (max-width: 321px){
    li {
      display:none;
    }
  }
`;
const NavItem = styled.li`
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 25px;
  &:last-of-type {
    margin-right: 0;
  }
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
const Hamburger = styled.div`
  display:none;
  div{
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px 0;
  }
  @media (max-width: 321px) {
    display: block;
  }
`;

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

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <LogoWrapper>
          <Image src="/images/logo.png" width={106} height={100} alt="logo" className='logoImage'/>
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
        <Hamburger>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </StyledContainer>
    </StyledHeader>
  );
}
