import React, { useContext } from "react"
import sunIcon from "../../../assets/icons/sun.svg"
import moonIcon from "../../../assets/icons/moon.svg"
import { Wrapper } from "./styles"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { css } from "@emotion/core"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log("toggletheme", theme)
  return (
    <Wrapper
      type="button"
      onClick={toggleTheme}
      css={css`
        border: 2px solid red;
        float: right;
        display: inline;
      `}
    >
      <img src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  )
}

export default ToggleTheme
