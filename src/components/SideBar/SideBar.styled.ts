import styled from "styled-components";

export const SideBarStyled = styled.div`
  margin-top: 230px;
  width: 300px;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
`;
export const Category = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;
export const CategoryIcon = styled.div`
  & img {
    width: 30px;
    height: 30px;
    padding: 2px 15px;
  }
`;
