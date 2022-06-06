import React from "react";

const ColCard = (props) => {
  return (
    <div className="happy_customers_cols">
      <div>
        <p className="cols_text">{props.comment}</p>
      </div>

      <div className="happy_customers_cols_bottom">
        <span className="avatar">
          <img
            src={require("../../../../assets/images/Avatar.svg").default}
            alt="avatar"
          />
        </span>
        <div>
          <p>Osemwengie Benjamin</p>
          <span id="position">Product Designer at Digift</span>
        </div>
      </div>
    </div>
  );
};
export default ColCard;
