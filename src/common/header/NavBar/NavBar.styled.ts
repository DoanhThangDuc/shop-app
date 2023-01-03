import styled from "styled-components";
import { FaBorderAll } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;
export const NavBarRow = styled.div`
  width: 1500px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Categories = styled.div`
  width: 200px;
  height: 50px;
  background-color: #f3f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 20px;
  }
`;
export const SquareIcon = styled(FaBorderAll)`
  padding-right: 20px;
`;
export const NarrowDownIcon = styled(BsChevronDown)`
  padding-left: 20px;
`;
export const Nav = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  & a {
    font-size: 18px;
  }
`;
export const Home = styled.a``;
export const Pages = styled.a``;
export const UserAcc = styled.a``;
export const VendorAcc = styled.a``;
export const TrackOrder = styled.a``;
export const Contact = styled.a``;
