import React, { useState } from "react";
import {
  HeartIcon,
  NumberHeart,
  Off,
  SaleOff,
  Image,
  Details,
  Name,
  Stars,
  Price,
  AddToBag,
  CardRow,
  AddIcon,
  Rating,
  Info,
} from "./Card.styled";
import { productItems } from "../Data";

interface CardModal {
  id: number;
  discount: number;
  cover: string;
  name: string;
  price: number;
}
function Card() {
  const [Cards, setCards] = useState<CardModal[]>(productItems);
  return (
    <>
      {Cards.map((card: CardModal) => (
        <CardRow key={card.id}>
          <SaleOff>
            <Off>
              <p>{card.discount}% Off</p>
            </Off>
            <Rating>
              <NumberHeart>
                <p>0</p>
              </NumberHeart>
              <HeartIcon size={27} />
            </Rating>
          </SaleOff>
          <Image>
            <img src={card.cover} alt={card.name} />
          </Image>
          <Details>
            <Info>
              <Name>{card.name}</Name>
              <Stars size={25} />
              <Stars size={25} />
              <Stars size={25} />
              <Stars size={25} />
              <Stars size={25} />
              <Price>${card.price}.00</Price>
            </Info>
            <AddToBag>
              <AddIcon size={20} />
            </AddToBag>
          </Details>
        </CardRow>
      ))}
    </>
  );
}

export default Card;
