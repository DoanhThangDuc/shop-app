import styled from "styled-components";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export const CardRow = styled.div`
  width: 350px;
  height: 430px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const SaleOff = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Off = styled.div`
  margin: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e94560;
  width: 70px;
  height: 25px;
  border-radius: 25px;
  & p {
    font-size: 12px;
    color: #fff;
  }
`;

export const NumberHeart = styled.div`
  background-color: #4545d8;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 0 0;
  & p {
    color: #fff;
    font-size: 15px;
  }
`;
export const HeartIcon = styled(AiOutlineHeart)`
  padding: 10px 3px 0 0;
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
`;

export const Info = styled.div``;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 15px 15px;
`;

export const Name = styled.div`
  font-size: 18px;
  color: black;
`;
export const Stars = styled(AiFillStar)`
  color: #efef3b;
  padding: 4px 4px 0 0;
`;

export const Price = styled.div`
  color: #e94560;
  font-size: 17px;
`;

export const AddToBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9d9191;
  width: 30px;
  margin: 20px 0 0 0;
  height: 30px;
  cursor: pointer;
`;
export const AddIcon = styled(FaPlus)`
  color: #e94560;
`;
