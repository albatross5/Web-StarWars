import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LocalizationContext = React.createContext({
  localization: {},
  isLocalized: false,
  setCurrentLocalization: () => {},
});

const LocalizationContextProvider = (props) => {
  const [localization, setLocalization] = useState({
    currentLanguage: "",
    currentLanguageCode: "",
    currentLanguageFlag: "",
  });

  const [isLocalized, setLocalized] = useState(false);

  const setCurrentLocalization = (localization) => {
    setLocalized(true);
    setLocalization(localization);
    sessionStorage.setItem("localization", JSON.stringify(localization));
  };

  useEffect(() => {
    if (sessionStorage.getItem("localization")) {
      setLocalization(JSON.parse(sessionStorage.getItem("localization")));
    }
  }, []);
  return (
    <LocalizationContext.Provider
      value={{
        localization,
        setCurrentLocalization,
        isLocalized,
      }}
    >
      {props.children}
    </LocalizationContext.Provider>
  );
};

LocalizationContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LocalizationContextProvider;