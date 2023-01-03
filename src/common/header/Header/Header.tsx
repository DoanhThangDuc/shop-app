import React from "react";
import Head from "../Head/Head";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import { HeaderStyled } from "./Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <Head />
      <Search />
      <NavBar />
    </HeaderStyled>
  );
}

export default Header;
