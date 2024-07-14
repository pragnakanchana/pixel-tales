import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import * as stylex from "@stylexjs/stylex";
import ThemeContext from "../utils/themeContext";
import { Colors, getColor } from "../design/tokens/colors";

const styles = stylex.create({
  wrapper:(theme)=>( {
    backgroundColor: getColor(theme,Colors.background),
    paddingTop: "100px",
    height: '100vh',
    backgroundSize: 'cover',
    overflow: 'auto',
    marginRight: -8,
    marginLeft: -8
  }),
});

function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      <div {...stylex.props(styles.wrapper(theme))}>
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
