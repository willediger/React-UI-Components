import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import HeaderBody from "./HeaderBody";

const HeaderContent = () => (
  <div className="header-content">
    <HeaderTitle />
    <HeaderBody />
  </div>
);

  
export default HeaderContent;