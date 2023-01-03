import React from "react";
import {
  Categories,
  Contact,
  Home,
  NarrowDownIcon,
  Nav,
  NavBarStyled,
  Pages,
  SquareIcon,
  TrackOrder,
  UserAcc,
  VendorAcc,
  NavBarRow,
} from "./NavBar.styled";

function NavBar() {
  return (
    <NavBarStyled>
      <NavBarRow>
        <Categories>
          <SquareIcon size={30} />
          <p>Categories</p>
          <NarrowDownIcon size={20} />
        </Categories>
        <Nav>
          <Home>Home</Home>
          <Pages>Pages</Pages>
          <UserAcc>User Account</UserAcc>
          <VendorAcc>Vendor Account</VendorAcc>
          <TrackOrder>Track My Order</TrackOrder>
          <Contact>Contact</Contact>
        </Nav>
      </NavBarRow>
    </NavBarStyled>
  );
}

export default NavBar;
