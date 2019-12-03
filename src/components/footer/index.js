import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  padding: 2.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  .footer-copyright {
    @media ${props => props.theme.media.sm} {
      display: none;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const PrivacyAndTerms = styled.div`
  position: absolute;
  left: 25px;
  color: #fff;
  a {
    padding-right: 13px;
    border-right: 2px solid hsla(0, 0%, 100%, 0.15);
  }
  a:last-of-type {
    padding-left: 10px;
    padding-right: 0;
    border: 0 none;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper
      style={{ backgroundColor: "var(--color-1)", color: "white" }}
    >
      <PrivacyAndTerms>
        <a href=''>Privacy Policy</a>
        <a href=''> Terms & Conditions</a>
      </PrivacyAndTerms>
      <div className='footer-copyright' style={{ textAlign: "right" }}>
        © {new Date().getFullYear()}, Copyright{" "}
        <a href='https://www.solabels.com'>Solabels</a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
