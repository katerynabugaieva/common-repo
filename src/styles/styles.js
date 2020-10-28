import styled from "styled-components"
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1700px;
  height: 1000px;
  padding: ${rhythm(1.5)};
  padding-top: ${rhythm(1.5)};
  background-image: url("/images/bg.jpg");

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
