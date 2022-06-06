import React from "react";
import { Button } from "react-bootstrap";
import { RightOutlined } from "@ant-design/icons";

const CardComponent = (props) => {
  return (
    <div className="card_container">
      <div>
        <div className='gift_tag'>Giftcards</div>
      </div>

      <div className="card_content_middle">
        <div className="d-flex card_content_top">
          <span>
            <img
              src={require("../../../../assets/images/aws_logo.svg").default}
              alt="aws"
            />
          </span>
          <p>{props.content.label}</p>
        </div>
        <p className="card_content_desc mt-3">{props.content.description}</p>
      </div>

      <div className="card_content_bottom">
        <span className="d-flex">
          <img
            src={require("../../../../assets/images/information.svg").default}
            alt="information"
          />
          <p className="card_content_desc" style={{marginLeft: '0.45rem'}}>{props.content.cardFee}</p>
        </span>

        <Button className='w-100 mt-2'>
          Purchase card <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default CardComponent;
