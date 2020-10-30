import React, { useContext } from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import ToggleTheme from "../components/theme/ToggleTheme"
import { Wrapper } from "../styles/styles"
import { ThemeContext } from "../providers/ThemeProvider"
import styled from "styled-components"

const Divider = styled.div`
   width: 100%;
   border: 1px dotted #555;
   opacity: 50%;
   margin: 10px 0px;
  }
`

export default function Home({ data }) {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper theme={theme}>
      <Layout>
        <ToggleTheme />
        <div>
          <h3>Ship of Theseus</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h5
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}
                </h5>
              </Link>
              <Divider />
            </div>
          ))}
          <Link
            to="/booksImagies"
            css={css`
              color: inherit;
              text-decoration: none;
            `}
          >
            <h5
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              Images of the book
            </h5>
          </Link>
        </div>
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___tasteRating, frontmatter___effortRating]
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            comment
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
