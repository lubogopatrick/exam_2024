import React from "react";
import { Link } from "react-router-dom";

// import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

export const MenuItem = ({
  title,
  imageUrl,
  size,
  quantity,
  history,
  linkUrl,
  match,
}) => (
  <div
    className={`${size} menu-item`}
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
  
      <Link className="option" to="/shop">
      <span className="subtitle">SHOP BOOK NOW</span>
      </Link>
        
          </div>
  </div>
);

// export default (MenuItem);
