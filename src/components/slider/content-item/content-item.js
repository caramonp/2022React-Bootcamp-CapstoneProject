import React from "react";

import "./content-item.css";

const ContentItem = ({ columnContent }) => {
  return (
    <div className="content-item" key={columnContent.data.main_image.alt}>
      <img
      src={columnContent.data.main_image.url}
              alt={columnContent.data.main_image.alt}
        className="content-item-image"
      />
    </div>
  );
};

export default ContentItem;
