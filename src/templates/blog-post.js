import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ToggleTheme from "../components/theme/ToggleTheme"
import { ThemeContext } from "@emotion/core"
import { Wrapper } from "../styles/styles"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { theme } = useContext(ThemeContext)
console.log("post", post)
  return (
    <Wrapper theme={theme}>
      <Layout>
        <ToggleTheme />
        <div>
          <h3>{post.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
