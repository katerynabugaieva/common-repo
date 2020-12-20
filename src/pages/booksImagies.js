import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ScrollMe from "../components/scrollToTheTop"

export default function BooksImagies({ data }) {
  console.log(data)

  const sources = [
    data.image1.childImageSharp.fixed,
    data.image2.childImageSharp.fixed,
    data.image3.childImageSharp.fixed,
    data.image4.childImageSharp.fixed,
    data.image5.childImageSharp.fixed,
    data.image6.childImageSharp.fixed,
    data.image7.childImageSharp.fixed,
    data.image8.childImageSharp.fixed,
    data.image9.childImageSharp.fixed,
    data.image10.childImageSharp.fixed,
    data.image11.childImageSharp.fixed,
    data.image12.childImageSharp.fixed,
    data.image13.childImageSharp.fixed,
    data.image14.childImageSharp.fixed,
    data.image15.childImageSharp.fixed,
  ]
  return (
    <Layout>
      <div>
        <ScrollMe />
        <Img fixed={sources[0]} />
        <Img fixed={sources[1]} />
        <Img fixed={sources[2]} />
        <Img fixed={sources[3]} />
        <Img fixed={sources[4]} />
        <Img fixed={sources[5]} />
        <Img fixed={sources[6]} />
        <Img fixed={sources[7]} />
        <Img fixed={sources[8]} />
        <Img fixed={sources[9]} />
        <Img fixed={sources[10]} />
        <Img fixed={sources[11]} />
        <Img fixed={sources[12]} />
        <Img fixed={sources[13]} />
        <Img fixed={sources[14]} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/1.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "images/2.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "images/3.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image4: file(relativePath: { eq: "images/4.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image5: file(relativePath: { eq: "images/5.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image6: file(relativePath: { eq: "images/6.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image7: file(relativePath: { eq: "images/7.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image8: file(relativePath: { eq: "images/8.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image9: file(relativePath: { eq: "images/9.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image10: file(relativePath: { eq: "images/10.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image11: file(relativePath: { eq: "images/11.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image12: file(relativePath: { eq: "images/12.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image13: file(relativePath: { eq: "images/13.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image14: file(relativePath: { eq: "images/14.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image15: file(relativePath: { eq: "images/15.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
