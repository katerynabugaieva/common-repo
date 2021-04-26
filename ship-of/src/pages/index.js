import { css } from "@emotion/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const Divider = styled.div`
   width: 100%;
   border: 1px dotted #555;
   opacity: 50%;
   margin: 10px 0px;
  }
`
const Item = styled.h5`
    margin-bottom: ${rhythm(1 / 4)};
  }
`
export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h3>Ship of Theseus</h3>
        <Link
          to="/fromWiki"
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Item>Something that you can read in wikipedia</Item>
        </Link>

        <Divider />

        <Link
          to="/description"
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Item>Description</Item>
        </Link>
        <Divider />

        <Link
          to="/development"
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Item>Development</Item>
        </Link>
        <Divider />

        <Link
          to="/notFromWiki"
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Item>Something that you cannot read in wikipedia</Item>
        </Link>

        <Divider />
        <Link
          to="/booksImagies"
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Item>Images of the book</Item>
        </Link>
      </div>
    </Layout>
  )
}
