import React, { useContext } from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import { Wrapper } from "../styles/styles"
import { ThemeContext } from "../providers/ThemeProvider"
import ToggleTheme from "./theme/ToggleTheme"

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
