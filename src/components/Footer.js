import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Left1>
          <Data1>
            <LanguageIcon />
            <p>www.jsrmarket.com</p>
          </Data1>
          <Data1>
            <MailIcon />
            <p>sales@jsrmarket.com</p>
          </Data1>
        </Left1>
        <Left1>
          <Data1>
            <PhoneIcon />
            <p>+91 987 654 3210</p>
          </Data1>
          <Data1>
            <RoomIcon />
            <p>H.No. 222, XYZ City, Sarita Vhiar,New Delhi, 323802</p>
          </Data1>
        </Left1>
      </Left>
      <Right>
        <Icon>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Icon>
        <p>Privacy Policy | © copyright 2021 by jsrmarket.com</p>
      </Right>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left1 = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Data1 = styled.div`
  display: flex;
  margin-bottom: 10px;
  & > .MuiSvgIcon-root {
    color: #2b4b40;
  }
  & > p {
    margin-left: 20px;
  }
`;
const Right = styled.div`
  margin-right: 30px;
  & > p {
    margin-left: 20px;
  }
`;
const Icon = styled.div`
  margin-bottom: 10px;
  & > .MuiSvgIcon-root {
    font-size: 2.2rem;
    margin-left: 20px;
    color: #2b4b40;
    &:hover {
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
