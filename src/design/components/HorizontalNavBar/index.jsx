import { Link } from "react-router-dom";
import { Colors, getColor } from "../../tokens/colors";
import { FontsSizes, getFontSize } from "../../tokens/fontSizes";
import stylex from "@stylexjs/stylex";
import { HEADING, LOGO_HEIGHT } from "../../../utils/constants";
import darkMode from "../../../assests/darkMode.svg";
import lightMode from "../../../assests/lightMode.svg";
import cameraDark from "../../../assests/cameraDark.svg";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../../utils/themeContext";
import { motion, animate, stagger } from "framer-motion";
import LogoAnimation from "../LogoAnimation";

const styles = stylex.create({
  container: (theme) => ({
    backgroundColor: getColor(theme, Colors.bg2),
    boxShadow: `0px 2px 10px ${getColor("light", Colors.primary)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 3,
    paddingLeft: "24px",
    paddingRight: "24px",
    marginLeft: -8,
    marginRight: -8,
  }),
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  sectionWrapper: {
    display: "flex",
    alignItems: "center",
  },
  navItem: (theme) => ({
    padding: "0px 24px",
    backgroundColor: {
      default: null,
    },
    boxShadow: {
      default: null,
    },
    fontSize: getFontSize(FontsSizes.h6),
    alignSelf: "center",
  }),
  link: (theme) => ({
    textDecoration: "none",
    color: getColor(theme, Colors.primary),
  }),
  heading: (theme) => ({
    padding: "16px 16px",
    color: getColor(theme, Colors.primary),
    fontSize: getFontSize(FontsSizes.h5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
});

const HorizontalNavBar = ({ navItems }) => {
  const { left = [], right = [], logoUrl = "" } = navItems || {};
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("check theme ", theme);

  const renderItem = (item) => {
    if (item.label === "mode") {
      return (
        <div {...stylex.props(styles.navItem(theme))}>
          {theme === "light" ? (
            <img
              src={darkMode}
              width={30}
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <img
              src={lightMode}
              width={30}
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </div>
      );
    }

    return (
      <div {...stylex.props(styles.navItem(theme))}>
        <Link {...stylex.props(styles.link(theme))} to={item.link}>
          {item.label}
        </Link>
      </div>
    );
  };

  return (
    <motion.div
      {...stylex.props(styles.container(theme))}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <div {...stylex.props(styles.heading(theme))}>
        {/* <LogoAnimation /> */}
        <Link {...stylex.props(styles.link(theme))} to={"/"}>
          {HEADING}
        </Link>
      </div>
      <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.sectionWrapper)}>
          {left.map((item) => {
            return renderItem(item);
          })}
        </div>
        <div {...stylex.props(styles.sectionWrapper)}>
          {right.map((item) => {
            return renderItem(item);
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalNavBar;
