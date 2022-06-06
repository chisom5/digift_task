import React from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <Navbar expand="lg" className="header_container">
      <Container fluid>
        <Link to="/" className="logo_container">
          <img
            src={require("../../assets/images/logo.svg").default}
            alt="logo"
            loading="lazy"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav_left" navbarScroll>
            <Link to="/" id='nav_left_firstText'>
              Personal
              <span className="nav_textIcon">
                <RightOutlined />
              </span>
            </Link>
            <Link to="/business_page">
              Business{" "}
              <span className="nav_textIcon">
                <RightOutlined />
              </span>
            </Link>

            <Form className="d-flex search_form">
              <Input
                placeholder="Find cards anywhere"
                prefix={<SearchOutlined />}
                className="search_input"
              />
            </Form>
          </Nav>

          <Nav className="nav_right">
            {/* toggle here */}
            <Link to="/">Login</Link>
            <Button className="">
              Get started{" "}
              <span>
                <img
                  src={require("../../assets/images/getStarted.svg").default}
                  alt="getStarted"
                  loading="lazy"
                />
              </span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderComponent;
