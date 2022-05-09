import React, { useState } from "react";
import { shop_Data } from "../../Constants";
import Hats from "../Hats/Hats";
// import Jackets from '../Jackets'
// import Sneakers from '../Sneakers'
// import Womens from '../Womens'
// import Mens from '../Mens'
// import { Link } from 'react-router-dom'
import "../../css/collection-items.sytles.scss";

const DsiplayCollections = (props) => {
  const [collections, setCollections] = useState(shop_Data);

  return (
    <div>
      <h1>Collections</h1>
      <div className="collection-preview">
        {collections?.map(({ id, ...collectionsData }) => (
          <Hats key={id} {...collectionsData} />
        ))}
      </div>
    </div>
  );
};

DsiplayCollections.propTypes = {};

export default DsiplayCollections;
