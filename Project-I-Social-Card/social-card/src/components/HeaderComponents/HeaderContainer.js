import React from 'react';
import './Header.css';

import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderContent from "./components/HeaderComponents/HeaderContent";

function HeaderContainer() {
  return (
    <>
      <ImageThumbnail />
      <HeaderContent />
    </>
  );
};

export default HeaderContainer;
