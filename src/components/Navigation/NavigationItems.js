import React from "react";

const NavigationItems = ({ title = "", to }) => {
  return (
    <a href={to} className="mx-4 hover:underline">
      {title}
    </a>
  );
};

export default NavigationItems;
