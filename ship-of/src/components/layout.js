import { css } from "@emotion/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"
import { Wrapper } from "../styles/styles"
import { rhythm } from "../utils/typography"
import ToggleTheme from "./theme/ToggleTheme"
import ScrollMe from "./scrollToTheTop"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <Wrapper theme={theme}>
        <ToggleTheme />
        <ScrollMe />

        <Link to={`/`}>
          <h4
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h4>
        </Link>
        {children}
      </Wrapper>
    </div>
  )
}
