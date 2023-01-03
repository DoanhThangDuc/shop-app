import styled from "styled-components";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

export const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  border: 1px solid black;
  background-color: #0f3460;
  display: flex;
  justify-content: center;
  color: white;
`;
export const FooterRow = styled.div`
  width: 1500px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DownLoadApp = styled.div`
  width: 350px;
`;
export const Quote = styled.p`
  color: #b5afaf;
  padding-bottom: 20px;
`;
export const LogoPrint = styled.div`
  color: #ff4545;
  font-size: 35px;
  font-style: italic;
  padding-bottom: 30px;
`;
export const GooglePlay = styled.div`
  background-color: #0c2a4d;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & p {
    padding-right: 10px;
  }
`;
export const AppStore = styled.div`
  background-color: #0c2a4d;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & p {
    padding-right: 10px;
  }
`;
export const AboutUs = styled.div`
  & p {
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const AppLink = styled.div`
  color: #b5afaf;
  padding-bottom: 10px;
  cursor: pointer;
`;
export const CustomerCare = styled.div`
  & p {
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const ContactUs = styled.div`
  & p {
    margin-top: -50px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const App = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;
export const GooglePlayIcon = styled(FaGooglePlay)`
  padding-left: 10px;
`;
export const AppStoreIcon = styled(FaAppStoreIos)`
  padding-left: 10px;
`;
