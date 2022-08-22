import React, { useState, useContext } from "react";
import { navigate } from "../../data component/data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [displayMission, setDisplaymission] = useState(false);
  const [displayVision, setDisplayvision] = useState(false);
  const [displayValues, setDisplayvalues] = useState(false);
  const [isSubmenuOpen, setIssubmenuOpen] = useState(false);
  const [displayNav, setDisplaynav] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", link: [[]] });

  const openSubMenu = (Header, cordinates) => {
    const pager = navigate.find((link) => link.pages === Header);
    setPage(pager);
    // console.log(pager);
    //setting text & cordinates as an object , they wont be read
    setLocation(cordinates);
    setIssubmenuOpen(true);
  };

  const closeSubMenu = () => {
    setIssubmenuOpen(false);
  };
  const openDisplaymission = () => {
    setDisplaymission(true);
    setDisplayvalues(false);
  };
  const openDisplayvision = () => {
    setDisplayvision(true);
    setDisplaymission(false);
    setDisplayvalues(false);
  };
  const openDisplayvalues = () => {
    setDisplayvalues(true);
    setDisplaymission(false);
  };
  const closeNavbar = () => {
    setDisplaynav(false);
  };
  const openNavbar = () => {
    setDisplaynav(true);
  };
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubMenu,
        closeSubMenu,
        location,
        page,
        displayMission,
        displayVision,
        displayValues,
        displayNav,
        openDisplaymission,
        openDisplayvision,
        openDisplayvalues,
        closeNavbar,
        openNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
