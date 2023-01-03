import React from "react";
import {
  AboutUs,
  AppLink,
  AppStore,
  ContactUs,
  CustomerCare,
  DownLoadApp,
  FooterRow,
  FooterStyled,
  GooglePlay,
  Quote,
  LogoPrint,
  App,
  AppStoreIcon,
  GooglePlayIcon,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <FooterRow>
        <DownLoadApp>
          <LogoPrint>Bonik</LogoPrint>
          <Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </Quote>
          <App>
            <GooglePlay>
              <GooglePlayIcon />
              <p>Google Play</p>
            </GooglePlay>
            <AppStore>
              <AppStoreIcon />
              <p>App Store</p>
            </AppStore>
          </App>
        </DownLoadApp>
        <AboutUs>
          <p>About Us</p>
          <AppLink>Careers</AppLink>
          <AppLink>Our Stores</AppLink>
          <AppLink>Our Cares</AppLink>
          <AppLink>Terms & Conditions</AppLink>
          <AppLink>Privacy Policy</AppLink>
        </AboutUs>
        <CustomerCare>
          <p>Customer Care</p>
          <AppLink>Help Center</AppLink>
          <AppLink>How to Buy</AppLink>
          <AppLink>Track Your Orders</AppLink>
          <AppLink>Corporate & Bulk Purchasing</AppLink>
          <AppLink>Returns & Refunds</AppLink>
        </CustomerCare>
        <ContactUs>
          <p>Contact Us</p>
          <AppLink>345 Khong Tu, Distric 3, Ho Chi Minh City, Viet Nam</AppLink>
          <AppLink>Email: customer.care@markwart.com</AppLink>
          <AppLink>Phone: + 2345 378 232</AppLink>
        </ContactUs>
      </FooterRow>
    </FooterStyled>
  );
}

export default Footer;
