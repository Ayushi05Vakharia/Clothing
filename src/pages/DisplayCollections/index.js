import "../../css/collection-items.sytles.scss";

import React, { useEffect, useState } from "react";

import CollectionItems from "../CollectionItems";
import { shop_Data } from "../../Constants";
import { useLocation } from "react-router-dom";

const DsiplayCollections = (props) => {
  const [collections, setCollections] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setCollections(shop_Data);
    } else {
      const chooseCategory = location.pathname.replace("/", "").charAt(0).toUpperCase() + location.pathname.slice(2);
      console.log("loc", chooseCategory);
      const finalCategory = shop_Data.filter((e) => e.title === chooseCategory);
      setCollections(finalCategory);
    }
  }, [location]);

  // console.log();
  return (
    <div>
      <h1>Collections</h1>
      <div className="collection-preview">
        {collections?.map(({ id, ...collectionsData }) => (
          <CollectionItems key={id} {...collectionsData} />
        ))}
      </div>
    </div>
  );
};

DsiplayCollections.propTypes = {};

export default DsiplayCollections;
