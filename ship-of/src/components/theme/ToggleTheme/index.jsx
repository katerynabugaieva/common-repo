import React, { useContext } from "react"
import sunIcon from "../../../assets/icons/sun.svg"
import moonIcon from "../../../assets/icons/moon.svg"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { css } from "@emotion/core"
import { ThemeToggleWrapper } from "./styles"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log("toggletheme", theme)
  return (
    <ThemeToggleWrapper
      type="button"
      onClick={toggleTheme}
      css={css`
        float: right;
        display: inline-block;
        background-color: none;
      `}
    >
      <img src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </ThemeToggleWrapper>
  )
}

export default ToggleTheme
