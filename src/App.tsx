import React from "react";

import Routes from "./components/routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
