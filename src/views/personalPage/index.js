import React, { useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { RightOutlined } from "@ant-design/icons";
// ui component
import HeaderComponent from "../../components/header";
import FilterComponent from "./components/filterComponent";
import FilterContentComponent from "./components/filterContent";
import CardComponent from "./components/arrivalCards";
import ColCard from "./components/colCards";
import FooterComponent from "../../components/footer";

const PersonalPage = () => {
  const [filterLabels] = useState([
    {
      id: 1,
      name: "Ecommerce",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 2,
      name: "Popular",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 3,
      name: "Airtime & Electricity",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 4,
      name: "Gaming",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 5,
      name: "Electronics",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 6,
      name: "Clothes and Fashion",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 7,
      name: "Jewelry & Watches",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 8,
      name: "Home and furnitures",
      giftcards: [
        {
          id: 0,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
          for 20-somethings, selling all the freshest styles 
          complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 1,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
        for 20-somethings, selling all the freshest styles 
        complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
        {
          id: 2,
          label: "Amazon Gift Card",
          description: `Amazon Gift Card is a global fashion destination 
      for 20-somethings, selling all the freshest styles 
      complemented by exclusive content....`,
          cardFee: "This card has a fee of $ 0.99",
        },
      ],
    },
    {
      id: 9,
      name: "Sports & Entertainment",
    },
  ]);
  const [filterContent, setFilterContent] = useState(
    filterLabels[0] &&
      filterLabels[0].giftcards !== undefined &&
      filterLabels[0].giftcards.slice(0, 2)
  );
  const [checkedObj, setCheckedObj] = useState({
    checked: true,
    checkedId: 1,
  });

  const handleCheckboxChange = (e, item) => {
    setCheckedObj({
      ...checkedObj,
      checked: e.target.checked,
      checkedId: item.id,
    });
    let filterContent = filterLabels.filter((i) => i.id === item.id);
    setFilterContent(filterContent[0].giftcards.slice(0, 2));
  };

  const handleLoadMoreProducts = () => {
    let filterContent = filterLabels.filter(
      (i) => i.id === checkedObj.checkedId
    );
    setFilterContent(filterContent[0].giftcards);
  };

  return (
    <Container fluid>
      <header>
        <HeaderComponent />
        <section className="header_section">
          <div className="header_section_inner">
            <h2>Eliminate bank restrictions with our unique gift cards.</h2>
            <span id="header_section_desc">
              Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities
              and even more.
            </span>
            <Button>Start shopping</Button>

            <span id="header_zigzag_left">
              <img
                src={require("../../assets/images/float-left-zig.svg").default}
                alt="zig-left"
                loading="lazy"
              />
            </span>
            <span id="header_zigzag_right">
              <img
                src={require("../../assets/images/float-right-zig.svg").default}
                alt="zig-right"
                loading="lazy"
              />
            </span>
          </div>

          <div className="header_bottom_imgWrapper">
            <span>
              <img
                src={require("../../assets/images/amazon.svg").default}
                alt=""
                loading="lazy"
              />
            </span>
            <span>
              <img
                src={require("../../assets/images/atm.svg").default}
                alt=""
                loading="lazy"
              />
            </span>
          </div>
        </section>
      </header>
      {/* section latest Arrival */}
      <section className="arrivals_container">
        <h2 className="title">Latest Arrivals</h2>
        <div className="d-flex">
          <FilterComponent
            filterLabels={filterLabels}
            checkedObj={checkedObj}
            handleCheckboxChange={handleCheckboxChange}
          />
          <main>
            <FilterContentComponent
              component={filterContent?.map((item) => {
                return <CardComponent content={item} key={item.id} />;
              })}
            />
            <FilterContentComponent
              component={filterContent?.map((item) => {
                return <CardComponent content={item} key={item.id} />;
              })}
            />
            <FilterContentComponent
              component={filterContent?.map((item) => {
                return <CardComponent content={item} key={item.id} />;
              })}
            />
          </main>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <Button className="btn_loadProducts" onClick={handleLoadMoreProducts}>
            Load more products
            <RightOutlined />
          </Button>
        </div>
      </section>

      {/* section for happy customer */}
      <section className="happy_customers_container">
        <h2 id="title">“Hear what happy customers are saying about Digift”</h2>
        <Row className="happy_customers_row">
          <ColCard
            comment={`“Digift stood out from the crowd with an impressive team and even more
          impressive mission: harnessing the power of giftcards enterprises to
          support people who are restricted by banks in Nigeria.”`}
          />
          <ColCard
            comment={`“Digift stood
          out from the crowd with an impressive team and even more impressive
          mission: harnessing the power of giftcards enterprises to support
          people who are restricted by banks in Nigeria. Digift stood out from
          the crowd with an impressive team and even more impressive mission ”`}
          />
          <ColCard
            comment={`“Digift stood out from the crowd with an impressive team and even more
          impressive mission: harnessing the power of giftcards enterprises to
          support people who are restricted by banks in Nigeria.”`}
          />
        </Row>
      </section>
      {/* section for create happiness */}
      <section className="buying_cards_container">
        <div className="buying_cards_container_inner">
          <div id="text_content">
            <h2>Create happiness from buying a gift card today.</h2>
            <span id="zigzag_icon">
              <img
                src={require("../../assets/images/float-left-zig.svg").default}
                alt=""
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </section>
      <FooterComponent />
    </Container>
  );
};
export default PersonalPage;
