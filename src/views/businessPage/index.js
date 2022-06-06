import React from "react";
import { Container, Button } from "react-bootstrap";
import HeaderComponent from "../../components/header";
import FooterComponent from "../../components/footer";
import CardEqualSize from "./components/cardEqual";
import { ArrowRightOutlined } from "@ant-design/icons";

const BusinessPage = () => {
  return (
    <Container fluid>
      <header>
        <HeaderComponent />
        <section className="row section_businessApi">
          <div className="col">
            <h1>
              Expand the giftcard industry, <span>one card</span> at a time!{" "}
              <span>
                <img
                  src={require("../../assets/images/star.svg").default}
                  alt="star"
                  loading="lazy"
                />
              </span>
            </h1>
            <span className="text">
              Digift helps businesses connect with customers by letting them
              offer their business gift cards to a large number of people.
            </span>

            <div className="d-flex align-items-center mt-3">
              <Button className="btn_getStarted">
                Get started <ArrowRightOutlined />{" "}
              </Button>
              <Button className="btn_signin">
                Sign In <ArrowRightOutlined />{" "}
              </Button>
            </div>
          </div>

          <div id="business_api_col">
            <img
              src={require("../../assets/images/header_db-bg.svg").default}
              alt="header_db-bg"
              loading="lazy"
            />
          </div>
        </section>
      </header>

      <section className="second_section">
        <div className="second_section_inner">
          <span id="second_section_title">Digift helps businesses </span>
          <h2>Why do fast-growing merchant and vendor choose us?</h2>
          <span id="second_section_desc">
            Whether you’re a business looking to sell your own gift cards, a
            company looking for bulk gift card solution, digift is for you.
          </span>
          <Button>Create an account today</Button>
        </div>
      </section>

      <section className="row equalCard_wrapper">
        <CardEqualSize
          title="Designed for today’s ambitious businesses."
          description="We give merchants the ability to sell digital Gift Cards for their business quickly, intuitively and affordably."
        />
        <CardEqualSize
          title="Features that empower your business"
          description="Automate your sales and marketing so you can focus on other areas of your business."
        />
      </section>

      {/* section for API */}
      <section className="row section_businessApi">
        <div className="col">
          <h1>
            Our API is built to be as <span>lightweight</span> and efficient as
            possible.
          </h1>
          <span className="text">
            We offer client and server libraries in everything from our API
          </span>

          <div className="d-flex align-items-center mt-3">
            <Button className="btn_getStarted">
              Get started <ArrowRightOutlined />{" "}
            </Button>
            <Button className="btn_signin">
              Sign In <ArrowRightOutlined />{" "}
            </Button>
          </div>
        </div>

        <div id="business_api_col">
          <img
            src={require("../../assets/images/businessAPI.svg").default}
            alt="business_api"
            loading="lazy"
          />
        </div>
      </section>
      <FooterComponent />
    </Container>
  );
};
export default BusinessPage;
