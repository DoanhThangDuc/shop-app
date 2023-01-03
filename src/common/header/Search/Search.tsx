import React from "react";
import {
  Account,
  Logo,
  SearchBar,
  SearchIcon,
  SearchStyled,
  UserIcon,
  ShoppingBag,
  ShoppingIcon,
  SearchRow,
  SearchInput,
  User,
} from "./Search.styled";

function Search() {
  return (
    <SearchStyled>
      <SearchRow>
        <Logo>
          <img src="/images/logo.svg" alt="Logo" />
        </Logo>
        <SearchBar>
          <SearchIcon size={22} />
          <SearchInput placeholder="Search and hit enter..." type="text" />
        </SearchBar>
        <Account>
          <User>
            <UserIcon />
          </User>
          <ShoppingBag>
            <ShoppingIcon />
          </ShoppingBag>
        </Account>
      </SearchRow>
    </SearchStyled>
  );
}

export default Search;
