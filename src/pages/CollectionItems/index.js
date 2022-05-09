import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { WithRouter } from "../../CustomHooks/WithRouter";
import { isEmpty } from "lodash";
import "../../css/collection-items.sytles.scss";

const CollectionItems = ({ title, items }) => {
  return (
    <React.Fragment>
      <div className="title">{title}</div>
      <div className="preview">
        {items
          .filter((e) => e.id <= 4)
          ?.map((hat) => (
            <div className="collection-item">
              <div className="image" style={{ backgroundImage: `url(${hat.imageUrl})` }} />

              <div className="collection-footer">
                <span>{hat.name}</span>
                <span>${hat.price}</span>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

CollectionItems.propTypes = {};

export default WithRouter(CollectionItems);
