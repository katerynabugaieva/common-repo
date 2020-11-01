import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function BooksImagies({ data }) {
  console.log(data)

  const sources = [
    data.image1.childImageSharp.fluid,
    data.image2.childImageSharp.fluid,
    data.image3.childImageSharp.fluid,
    data.image4.childImageSharp.fluid,
    data.image5.childImageSharp.fluid,
    data.image6.childImageSharp.fluid,
    data.image7.childImageSharp.fluid,
    data.image8.childImageSharp.fluid,
    data.image9.childImageSharp.fluid,
    data.image10.childImageSharp.fluid,
    data.image11.childImageSharp.fluid,
    data.image12.childImageSharp.fluid,
    data.image13.childImageSharp.fluid,
    data.image14.childImageSharp.fluid,
    data.image15.childImageSharp.fluid,
  ]
  return (
    <Layout>
      <div>
        <Img fluid={sources[0]} />
        <Img fluid={sources[1]} />
        <Img fluid={sources[2]} />
        <Img fluid={sources[3]} />
        <Img fluid={sources[4]} />
        <Img fluid={sources[5]} />
        <Img fluid={sources[6]} />
        <Img fluid={sources[7]} />
        <Img fluid={sources[8]} />
        <Img fluid={sources[9]} />
        <Img fluid={sources[10]} />
        <Img fluid={sources[11]} />
        <Img fluid={sources[12]} />
        <Img fluid={sources[13]} />
        <Img fluid={sources[14]} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/1.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "images/2.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "images/3.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "images/4.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "images/5.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "images/6.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "images/7.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "images/8.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: { eq: "images/9.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image10: file(relativePath: { eq: "images/10.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image11: file(relativePath: { eq: "images/11.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image12: file(relativePath: { eq: "images/12.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image13: file(relativePath: { eq: "images/13.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image14: file(relativePath: { eq: "images/14.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image15: file(relativePath: { eq: "images/15.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
