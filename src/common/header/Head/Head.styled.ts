import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export const HeadStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f3460;
  height: 40px;
  color: white;
`;
export const HeadRow = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-between;
`;
export const Reference = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;
export const Support = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  & a {
    cursor: pointer;
  }
`;
export const PhoneIcon = styled(BsFillTelephoneFill)`
  padding-right: 5px;
`;
export const EnvelopeIcon = styled(FaEnvelope)`
  padding: 3px 10px 0 0;
`;

export const Phone = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Email = styled.div`
  display: flex;
  cursor: pointer;
`;
