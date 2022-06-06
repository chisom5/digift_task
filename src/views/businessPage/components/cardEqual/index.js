import React from "react";

const CardEqualSize = (props) => {
  return (
    <div className="equalCard_container">
      <div className="equalCard_top">
        <h2>{props.title}</h2>
        <span>{props.description}</span>
      </div>

      <div className="equalCard_bottom">
        <img
          src={require("../../../../assets/images/ambitious.svg").default}
          alt="ambitious"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CardEqualSize;
