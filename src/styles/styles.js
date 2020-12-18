import styled from "styled-components"
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  background-image: url("../static/bg.jpg");

  background-color: ${({ theme }) =>
    theme === "light" ? "#f2eecb" : "#000"}; // #f2eecb old paper

  h3,
  h4,
  p {
    color: ${({ theme }) => (theme === "dark" ? "#F0FFFF" : "#212121")};
  }

  h5 {
    color: ${({ theme }) => (theme === "dark" ? "#e07b39" : "#1979a9")};
  }

  p {
    font-size: 12px;
  }
`
