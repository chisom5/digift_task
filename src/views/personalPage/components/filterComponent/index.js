import React from "react";
import { Checkbox } from "antd";

const FilterComponent = (props) => {
  return (
    <div className="filter_container">
      <div className="filter_header">
        <p className="filter_title">Filter</p>
        <span>Reset</span>
      </div>

      <section className="filter_content">
        <p className="filter_title">Categories</p>
        {props.filterLabels &&
          props.filterLabels?.map((item) => {
            return (
              <div key={item.id} className="filter_content_item">
                <Checkbox
                  onChange={(e) => props.handleCheckboxChange(e, item)}
                  checked={
                    item.id === props.checkedObj.checkedId &&
                    props.checkedObj.checked
                      ? true
                      : false
                  }
                />
                <p>{item.name}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default FilterComponent;
