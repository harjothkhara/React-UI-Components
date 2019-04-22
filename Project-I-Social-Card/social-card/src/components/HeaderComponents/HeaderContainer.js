import React from 'react';
import './Header.css';


const HeaderContainer = () => {
return (
    <div className="header-container">
        <HeaderContent />
        <HeaderTitle />
        <ImageThumbnail />   
    </div>
  )  
};

export default HeaderContainer;