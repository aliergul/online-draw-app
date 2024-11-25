import React from "react";
import { useLocation } from "react-router-dom";

const NavigationItems = ({ title = "", to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <a
      href={to}
      className={`mx-4 px-4 py-2 rounded ${
        isActive ? " text-black bg-gray-300" : "text-gray-500"
      } hover:text-black`}
    >
      {title}
    </a>
  );
};

export default NavigationItems;
