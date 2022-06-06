import React from "react";
import { Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="footer_container">
      <Row className="footer_row">
        <Col md={4} className="footer_col-1">
          <span>
            <img
              src={require("../../assets/images/logo.svg").default}
              alt="logo"
              loading="lazy"
            />
          </span>
          <p>Creating Happiness One Giftcard at a Time.</p>
          <div className="social_links">
            <img
              src={require("../../assets/images/social_links.svg").default}
              alt="social links"
              loading="lazy"
            />
          </div>
        </Col>
        <Col md={4} className="footer_col-2">
          <div>
            <p>Contact us</p>
            <span>hello@digiftng.com</span>
          </div>

          <div className="">
            <p>Office</p>
            <span>226, Awolowo road, Ikoyi, Lagos State, Nigeria</span>

            <ul className="footer_col-1-list">
              <li>Our privacy policy </li>
              <li>Terms and Condition</li>
            </ul>
          </div>
        </Col>
        <Col
          md={4}
          className="footer_col-3"
        >
          <div className="footer_col-3_inner d-flex justify-content-space-between">
            <div>
              <p>Company</p>
              <ul className="footer_col-3-list">
                <li>Careers </li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <p>Products</p>
              <ul className="footer_col-3-list">
                <li>Personal </li>
                <li>Business</li>
                <li>Vendor</li>
              </ul>
            </div>
            <div>
              <p>Contact</p>
              <ul className="footer_col-3-list">
                <li>Instagram </li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <section className="footer_copyright">
        <div className="d-flex mb-2">
          <span>
            <img
              src={require("../../assets/images/ploygon_footer.svg").default}
              alt="ploygon"
              loading="lazy"
            />
          </span>
          <span id="copyright_text">
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC Number: 1656204. Trademark to
            all logos of Giftcards are owned by their respective brands and
            Blinksky Nigeria Limited doesn’t claim ownership of these
            trademarks. All Giftcards dominated in USD are provided in
            conjunction with BlinkSky Inc. Users must have valid US account and
            in some cases a valid US address before purchasing.
          </span>
        </div>
        <p>Copyright © 2022 Blinksky Nigeria Limited</p>
      </section>
    </footer>
  );
};

export default FooterComponent;
