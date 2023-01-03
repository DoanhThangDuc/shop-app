import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { RiUserFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";

export const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
`;
export const SearchRow = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.div``
export const SearchBar = styled.div`
  border: 1px solid #cfbfbf;
  width: 900px;
  display: flex;
  align-items: center;
  border-radius: 30px;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  padding: 0 20px;
  color: #504d4d;
`;
export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  font-size: 18px;
  color: #504d4d;
  border: none;
  outline: none;
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
  :-ms-input-placeholder {
    font-size: 18px;
  }
`;
export const Account = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;
export const User = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f3f5f9;
`;
export const UserIcon = styled(RiUserFill)``;
export const ShoppingBag = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f3f5f9;
`;
export const ShoppingIcon = styled(BiShoppingBag)``;
