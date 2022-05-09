import React, { useState } from "react";
import "../../css/homepage.styles.scss";
import { MenuItems } from "../../Components/index";
import { allCategories } from "../../Constants";
const HomePage = (props) => {
  const [categories, SetCategories] = useState(allCategories);
  return (
    <div className="homepage">
      <MenuItems categories={categories} />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
