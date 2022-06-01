import "../../css/homepage.styles.scss";

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuItems } from "../../Components/index";
import { allCategories } from "../../Constants";

const HomePage = (props) => {
  const [categories, SetCategories] = useState(allCategories);

  // const navigate = useNavigate();
  return (
    <div className="homepage">
      <MenuItems categories={categories} />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
