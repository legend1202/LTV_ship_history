import styled from 'styled-components';

interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: '415px', // for small screen mobile
  sm: '767px', // for mobile screen
  md: '1023px', // for tablets
  lg: '1366px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

export const DesktopContainer = styled.div`
  @media ${device.md} {
    display: none !important;
  }
`;
export const MobileContainer = styled.div`
  @media (min-width: ${size.sm}) {
    display: none !important;
  }
`;
export const TabletContainer = styled.div`
  @media (min-width: ${size.md}) {
    display: none !important;
  }
`;
