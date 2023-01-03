import React from "react";
import {
  Email,
  EnvelopeIcon,
  HeadRow,
  HeadStyled,
  Phone,
  PhoneIcon,
  Reference,
  Support,
} from "./Head.styled";

function Head() {
  return (
    <HeadStyled>
      <HeadRow>
        <Reference>
          <Phone>
            <PhoneIcon />
            <p>+ 36 722 3095</p>
          </Phone>
          <Email>
            <EnvelopeIcon />
            <p>customer.service@markward.com</p>
          </Email>
        </Reference>
        <Support>
          <a>Theme FAQ's</a>
          <a>Need Help?</a>
          <a>EN</a>
          <a>VN</a>
        </Support>
      </HeadRow>
    </HeadStyled>
  );
}

export default Head;
